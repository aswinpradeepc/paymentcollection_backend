import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Payment Collection API',
      version: '1.0.0',
      description: 'API documentation for the Payment Collection App',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/models/*.ts'], // files containing annotations as above
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;