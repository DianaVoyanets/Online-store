'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('productBaskets', [
      {
        image: "Very beautiful image1",
        productName: "Galaxy s6",
        price: 300,
        totalPrice: 300 * 3, 
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 1
      },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('productBaskets', null, {});
  }
};
