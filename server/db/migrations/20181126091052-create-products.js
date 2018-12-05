'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      productName: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },
      rating: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        onDelete: "CASCADE",
        references: {
          model: 'categoryOfProducts',
          key: 'id'
        }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};