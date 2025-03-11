'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customers', {
      account_number: {
        type: Sequelize.STRING(20),
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      phone: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      issue_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      interest_rate: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
      },
      tenure: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      emi_due: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('customers');
  },
};