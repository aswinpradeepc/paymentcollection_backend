import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize(
  process.env.POSTGRES_DB as string,
  process.env.POSTGRES_USER as string,
  process.env.POSTGRES_PASSWORD as string,
  {
    host: process.env.POSTGRES_HOST || 'localhost',
    dialect: 'postgres',
    port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
    logging: false,
  }
);

// Export the Sequelize instance
export default sequelize;