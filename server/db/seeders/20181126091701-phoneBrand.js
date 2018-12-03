'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('PhoneBrands', 
      [
        {
          markName: "Samsung",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('PhoneBrands', null, {});
  }
};
