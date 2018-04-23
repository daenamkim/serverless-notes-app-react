export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: ""
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://**********.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_*********",
    APP_CLIENT_ID: "**************************",
    IDENTITY_POOL_ID: "us-east-1:********-****-****-****-************"
  }
};
