import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { json, urlencoded } from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger/swaggerConfig';
import customerRoutes from './routes/customerRoutes';
// import paymentRoutes from './routes/paymentRoutes';
import errorHandler from './middlewares/errorHandler';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/customers', customerRoutes);
// app.use('/payments', paymentRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;