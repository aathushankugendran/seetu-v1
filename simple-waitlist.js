import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const dynamodb = new AWS.DynamoDB.DocumentClient();

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

export const submitWaitlist = async event => {
  try {
    console.log('Received event:', JSON.stringify(event, null, 2));

    const requestBody = JSON.parse(event.body || '{}');

    // Basic validation
    if (
      !requestBody.firstName ||
      !requestBody.lastName ||
      !requestBody.email ||
      !requestBody.country
    ) {
      return createResponse(400, {
        success: false,
        message: 'All fields are required',
      });
    }

    // Create waitlist item
    const waitlistItem = {
      id: uuidv4(),
      firstName: requestBody.firstName.trim(),
      lastName: requestBody.lastName.trim(),
      email: requestBody.email.trim().toLowerCase(),
      country: requestBody.country.trim(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    console.log('Storing waitlist item:', waitlistItem);

    // Store in DynamoDB
    const params = {
      TableName: process.env.WAITLIST_TABLE,
      Item: waitlistItem,
    };

    await dynamodb.put(params).promise();

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
      error: error.message,
    });
  }
};
