import app from './app';
import sequelize from './config/db';

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});