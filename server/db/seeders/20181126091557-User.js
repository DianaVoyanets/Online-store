'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', 
      [
        {
          login: "user",
          password: "user",
          email: "user@gmail.com",
          RoleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          login: "admin",
          password: "ADMIN",
          email: "admin@gmail.com",
          RoleId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
