'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Products', [
        {
          image: "Very beautiful image",
          productName: "Samsung",
          price: 300.5,
          rating: 0,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});
  }
};
