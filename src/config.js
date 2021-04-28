const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-api-project",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://udll71zwii.execute-api.us-east-1.amazonaws.com/dev",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_Y6E5BRycY",
        APP_CLIENT_ID: "2cg02ang063ugqci7p8hgbtgc8",
        IDENTITY_POOL_ID: "us-east-1:ae45bbb2-5e61-4ee3-afab-5619a3d102da",
    },
};

export default config;