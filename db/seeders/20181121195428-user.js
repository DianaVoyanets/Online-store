'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('user', [{
        login: 'user',
        password: 'user',
        email: 'user@gmail.com'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('user', null, {});
  }
};
