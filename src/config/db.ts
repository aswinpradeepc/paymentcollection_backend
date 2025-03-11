import { Sequelize } from "sequelize";
import dotenv from "dotenv-safe";

dotenv.config(); 

const sequelize = new Sequelize(
  process.env.POSTGRES_DB!,
  process.env.POSTGRES_USER!,
  process.env.POSTGRES_PASSWORD!,
  {
    host: process.env.PG_HOST!,
    port: Number(process.env.PG_PORT),
    dialect: "postgres",
    logging: false,
  }
);

export default sequelize;
