import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, QueryCommand } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';

// Initialize DynamoDB
const client = new DynamoDBClient({ region: process.env.REGION });
const dynamodb = DynamoDBDocumentClient.from(client);

// Response helper
const createResponse = (statusCode, body) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  },
  body: JSON.stringify(body),
});

// Input validation
const validateWaitlistInput = data => {
  const errors = [];

  if (
    !data.firstName ||
    typeof data.firstName !== 'string' ||
    data.firstName.trim().length === 0
  ) {
    errors.push('First name is required and must be a non-empty string');
  }

  if (
    !data.lastName ||
    typeof data.lastName !== 'string' ||
    data.lastName.trim().length === 0
  ) {
    errors.push('Last name is required and must be a non-empty string');
  }

  if (
    !data.country ||
    typeof data.country !== 'string' ||
    data.country.trim().length === 0
  ) {
    errors.push('Country is required and must be a non-empty string');
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    !data.email ||
    typeof data.email !== 'string' ||
    !emailRegex.test(data.email.trim())
  ) {
    errors.push('Valid email address is required');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Submit waitlist entry
export const submitWaitlist = async event => {
  try {
    console.log('Received event:', JSON.stringify(event, null, 2));

    // Parse request body
    let requestBody;
    try {
      requestBody = JSON.parse(event.body || '{}');
    } catch (error) {
      console.error('Invalid JSON in request body:', error);
      return createResponse(400, {
        success: false,
        message: 'Invalid JSON in request body',
      });
    }

    // Validate input
    const validation = validateWaitlistInput(requestBody);
    if (!validation.isValid) {
      console.error('Validation errors:', validation.errors);
      return createResponse(400, {
        success: false,
        message: 'Validation failed',
        errors: validation.errors,
      });
    }

    // Prepare DynamoDB item
    const timestamp = new Date().toISOString();
    const waitlistItem = {
      id: uuidv4(),
      firstName: requestBody.firstName.trim(),
      lastName: requestBody.lastName.trim(),
      email: requestBody.email.trim().toLowerCase(),
      country: requestBody.country.trim(),
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    console.log('Storing waitlist item:', waitlistItem);

    // Check for existing email using GSI
    const existingEmailParams = {
      TableName: process.env.WAITLIST_TABLE,
      IndexName: 'email-index',
      KeyConditionExpression: 'email = :email',
      ExpressionAttributeValues: {
        ':email': waitlistItem.email,
      },
    };

      const existingResult = await dynamodb.send(new QueryCommand(existingEmailParams));
    if (existingResult.Items && existingResult.Items.length > 0) {
      return createResponse(409, {
        success: false,
        message: 'Email address is already registered for the waitlist',
      });
    }

    // Store in DynamoDB
    const params = {
      TableName: process.env.WAITLIST_TABLE,
      Item: waitlistItem,
    };

    await dynamodb.send(new PutCommand(params));

    console.log('Successfully stored waitlist entry');

    return createResponse(201, {
      success: true,
      message: 'Successfully added to waitlist',
      data: {
        id: waitlistItem.id,
        email: waitlistItem.email,
        createdAt: waitlistItem.createdAt,
      },
    });
  } catch (error) {
    console.error('Error in submitWaitlist:', error);

    return createResponse(500, {
      success: false,
      message: 'Internal server error',
      error:
        process.env.NODE_ENV === 'development'
          ? error.message
          : 'Something went wrong',
    });
  }
};

// Get waitlist statistics (admin endpoint)
export const getWaitlistStats = async event => {
  try {
    console.log('Getting waitlist stats');

    // Get total count
    const scanParams = {
      TableName: process.env.WAITLIST_TABLE,
      Select: 'COUNT',
    };

    const scanResult = await dynamodb.scan(scanParams).promise();
    const totalCount = scanResult.Count;

    // Get recent signups (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const thirtyDaysAgoISO = thirtyDaysAgo.toISOString();

    const queryParams = {
      TableName: process.env.WAITLIST_TABLE,
      IndexName: 'createdAt-index',
      FilterExpression: 'createdAt >= :date',
      ExpressionAttributeValues: {
        ':date': thirtyDaysAgoISO,
      },
    };

    const queryResult = await dynamodb.scan(queryParams).promise();
    const recentCount = queryResult.Count;

    return createResponse(200, {
      success: true,
      data: {
        totalSignups: totalCount,
        recentSignups: recentCount,
        lastUpdated: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Error in getWaitlistStats:', error);

    return createResponse(500, {
      success: false,
      message: 'Internal server error',
      error:
        process.env.NODE_ENV === 'development'
          ? error.message
          : 'Something went wrong',
    });
  }
};
