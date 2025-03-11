import sequelize from '../config/db';
import Customer from './customer';
import Payment from './payment';

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Use { force: true } for development only
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Unable to sync database:', error);
  }
};

syncDatabase();

export { Customer, Payment };