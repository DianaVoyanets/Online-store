'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const samsungBrandId = await queryInterface.rawSelect('PhoneBrands', {
        where: {
            brandName: 'Samsung',
        },
      }, ['id']);

    const iphoneBrandId = await queryInterface.rawSelect('PhoneBrands', {
      where: {
          brandName: 'Iphone',
      },
    }, ['id']);

      return queryInterface.bulkInsert('Products', [
        {
          image: "Very beautiful image1",
          productName: "Galaxy s6",
          price: 300,
          rating: 0,
          phoneBrandId: samsungBrandId,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: "Very beautiful image1",
          productName: "Iphone s6++",
          price: 1000,
          rating: 0,
          phoneBrandId: iphoneBrandId,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});
  }
};
