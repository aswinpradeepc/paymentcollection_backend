import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Customer extends Model {
  public account_number!: string;
  public name!: string;
  public email!: string;
  public phone!: string;
  public address!: string;
  public issue_date!: Date;
  public interest_rate!: number;
  public tenure!: number;
  public emi_due!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Customer.init(
  {
    account_number: {
      type: DataTypes.STRING(20),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    issue_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    interest_rate: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    tenure: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    emi_due: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'customers',
  }
);

export default Customer;