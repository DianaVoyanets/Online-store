'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [{
        image: 'very beatiful image',
        productName: 'Samsung galaxy S6 Edge+12',
        price: 400,
        rating: 0
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('products', null, {});
  }
};
