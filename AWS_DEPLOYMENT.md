# AWS Serverless Deployment Guide

This guide will help you deploy the Seetu waitlist API to AWS using the Serverless Framework.

## Prerequisites

1. **AWS Account** with appropriate permissions
2. **Node.js** >= 18.0.0
3. **AWS CLI** configured with your credentials
4. **Serverless Framework** installed globally

## Installation

1. **Install Serverless Framework globally:**
   ```bash
   npm install -g serverless
   ```

2. **Install AWS dependencies:**
   ```bash
   npm install
   ```

## AWS Setup

### 1. Configure AWS Credentials

Set up your AWS credentials using one of these methods:

**Option A: AWS CLI**
```bash
aws configure
```

**Option B: Environment Variables**
```bash
export AWS_ACCESS_KEY_ID=your-access-key
export AWS_SECRET_ACCESS_KEY=your-secret-key
export AWS_DEFAULT_REGION=us-east-1
```

**Option C: IAM Role (for CI/CD)**
Create an IAM role with the following permissions:
- `AWSLambdaFullAccess`
- `AmazonAPIGatewayAdministrator`
- `AmazonDynamoDBFullAccess`
- `IAMFullAccess`

### 2. Deploy to AWS

**Development Environment:**
```bash
npm run deploy:dev
```

**Staging Environment:**
```bash
npm run deploy:staging
```

**Production Environment:**
```bash
npm run deploy:prod
```

### 3. Get API Gateway URL

After deployment, the CLI will output the API Gateway URLs:
```
endpoints:
  POST - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/waitlist
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/waitlist/stats
```

## Environment Configuration

### 1. Update Frontend Environment Variables

Copy the API Gateway URL from the deployment output and update your `.env.local`:

```env
VITE_WAITLIST_API_URL=https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev
VITE_AWS_REGION=us-east-1
```

### 2. Redeploy Frontend

```bash
npm run build:prod
# Deploy your frontend to your hosting provider
```

## Local Development

### 1. Run API Locally

```bash
npm run offline
```

This will start the API locally at `http://localhost:3000`

### 2. Update Local Environment

For local development, update your `.env.local`:
```env
VITE_WAITLIST_API_URL=http://localhost:3000
```

## AWS Resources Created

The deployment creates the following AWS resources:

### 1. Lambda Functions
- `seetu-waitlist-api-dev-submitWaitlist` - Handles waitlist submissions
- `seetu-waitlist-api-dev-getWaitlistStats` - Returns waitlist statistics

### 2. API Gateway
- REST API with CORS enabled
- POST `/waitlist` endpoint
- GET `/waitlist/stats` endpoint

### 3. DynamoDB Table
- `seetu-waitlist-api-waitlist-signups-dev`
- Primary key: `id` (UUID)
- Global Secondary Index: `createdAt-index`
- Encryption at rest enabled
- Point-in-time recovery enabled

### 4. IAM Roles
- Lambda execution roles with DynamoDB permissions

## Monitoring and Logs

### 1. CloudWatch Logs
Monitor your Lambda functions:
```bash
serverless logs -f submitWaitlist --tail
```

### 2. DynamoDB Console
View waitlist submissions in the AWS DynamoDB console.

### 3. API Gateway Console
Monitor API usage and errors in the API Gateway console.

## Security Features

1. **Input Validation** - Server-side validation for all form inputs
2. **Duplicate Prevention** - Prevents duplicate email registrations
3. **Encryption** - DynamoDB encryption at rest enabled
4. **CORS** - Properly configured CORS for web requests
5. **Error Handling** - Comprehensive error handling and logging

## Cost Optimization

1. **DynamoDB** - Pay-per-request billing mode
2. **Lambda** - Pay only for actual usage
3. **API Gateway** - Pay per API call
4. **No idle costs** - Serverless architecture eliminates idle costs

## Troubleshooting

### Common Issues

1. **Deployment Fails**
   - Check AWS credentials
   - Verify IAM permissions
   - Check region configuration

2. **CORS Errors**
   - Verify API Gateway CORS configuration
   - Check frontend domain in CORS settings

3. **DynamoDB Errors**
   - Check table permissions
   - Verify table exists in correct region

4. **Lambda Timeout**
   - Check function timeout settings
   - Monitor CloudWatch logs

### Useful Commands

```bash
# View deployment status
serverless info

# Remove all resources
npm run remove

# Deploy specific function
serverless deploy function -f submitWaitlist

# View logs
serverless logs -f submitWaitlist --tail
```

## Production Considerations

1. **Custom Domain** - Set up a custom domain for API Gateway
2. **Rate Limiting** - Implement API rate limiting
3. **Monitoring** - Set up CloudWatch alarms
4. **Backup** - Enable DynamoDB point-in-time recovery
5. **Security** - Consider API key authentication for admin endpoints

## Support

For issues with this deployment:
1. Check AWS CloudWatch logs
2. Verify environment variables
3. Test API endpoints manually
4. Review IAM permissions
