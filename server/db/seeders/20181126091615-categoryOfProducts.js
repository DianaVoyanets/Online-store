'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('categoryOfProducts', [{
        categoryName: "Phone",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('categoryOfProducts', null, {});
  }
};
