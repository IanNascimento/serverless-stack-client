const dev = {
    STRIPE_KEY: "pk_test_51IkfIqKEKi30yFz1lYpVS63DIc0eEN2wWjELtv3DO3QdBqfCiJskXq6sSopwBd251TT05HE7HbVml9Qyd8zhxHUo00rzp6kgyr",
    s3: {
        REGION: "us-east-1",
        BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1bnz21r39zd3d"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://udll71zwii.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_TrPVJgPk9",
        APP_CLIENT_ID: "680gc4eqhunke0j9pm0v7g71gg",
        IDENTITY_POOL_ID: "us-east-1:e1b21329-7b33-458d-8398-2a356d629269"
    }
};

const prod = {
    STRIPE_KEY: "pk_test_51IkfIqKEKi30yFz1lYpVS63DIc0eEN2wWjELtv3DO3QdBqfCiJskXq6sSopwBd251TT05HE7HbVml9Qyd8zhxHUo00rzp6kgyr",
    s3: {
        REGION: "us-east-1",
        BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-necwse7l4409"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://x9vbmkx3td.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_8tbjH6xuR",
        APP_CLIENT_ID: "1nrt3t8er3ps8iqr377va96icn",
        IDENTITY_POOL_ID: "us-east-1:0e94b722-5c00-4234-9358-8005e8ab878e"
    }
};

const config = {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    // Default to dev if not set
    ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;