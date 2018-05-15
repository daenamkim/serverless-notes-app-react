export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'oootoko-serverless-notes-app-uploads'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://6n5vigj2k0.execute-api.us-east-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_6S1G4MTRL',
    APP_CLIENT_ID: '4548c0tvempdaebd5pls26iraq',
    IDENTITY_POOL_ID: 'us-east-1:9c336fa2-7aa2-4af8-b1cb-bbf7b75b28be'
  }
};
