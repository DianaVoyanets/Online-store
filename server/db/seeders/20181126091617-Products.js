'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const brandId = await queryInterface.rawSelect('PhoneBrands', {
        where: {
            brandName: 'Samsung',
        },
      }, ['id']);

      return queryInterface.bulkInsert('Products', [
        {
          image: "Very beautiful image",
          productName: "Galaxy s6",
          price: 300.5,
          rating: 0,
          phoneBrandId: brandId,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});
  }
};
