import app from './app';
import sequelize from './config/db';

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  const maxRetries = 5;
  let retries = 0;

  while (retries < maxRetries) {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
      break;
    } catch (error) {
      retries += 1;
      console.error(`Unable to connect to the database (attempt ${retries}):`, error);
      await new Promise(res => setTimeout(res, 5000)); // wait for 5 seconds before retrying
    }
  }

  if (retries === maxRetries) {
    console.error('Max retries reached. Exiting...');
    process.exit(1);
  }
};

startServer();