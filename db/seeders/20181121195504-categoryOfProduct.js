'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('categoryOfProduct', [{
        categoryName: 'Phone'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('categoryOfProduct', null, {});
  }
};
