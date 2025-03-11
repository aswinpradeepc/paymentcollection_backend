import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import Customer from './customer';

class Payment extends Model {
  public id!: string;
  public account_number!: string;
  public payment_date!: Date;
  public payment_amount!: number;
  public status!: 'pending' | 'completed' | 'failed';
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Payment.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    account_number: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: Customer,
        key: 'account_number',
      },
    },
    payment_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    payment_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'completed', 'failed'),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'payments',
  }
);

// Define associations
Payment.belongsTo(Customer, { foreignKey: 'account_number' });
Customer.hasMany(Payment, { foreignKey: 'account_number' });

export default Payment;