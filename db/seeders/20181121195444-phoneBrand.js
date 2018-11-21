'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('phoneBrand', 
      [
        {
           phone_brand: "Samsung"
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('phoneBrand', null, {});
  }
};
