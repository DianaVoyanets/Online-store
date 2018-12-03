'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Role', 
      [
        {
          roleName: "user",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roleName: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Role', null, {});
  }
};
