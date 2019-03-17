export default {
    MAX_ATTACHMENT_SIZE: 5000000,

    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-uploads-992"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://85vf6qjf3b.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_8EWarMZDB",
      APP_CLIENT_ID: "45r0m1cupi6u1ui9cgajf3ndpe",
      IDENTITY_POOL_ID: "us-east-1:e32ad8bb-fb38-4185-a8fa-318afa29c933"
    }
  };
  