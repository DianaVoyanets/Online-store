'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const productCategoryId = await queryInterface.rawSelect('productsCategories', {
        where: {
            productCategory: 'Phone',
        },
      }, ['id']);
      return queryInterface.bulkInsert('PhoneBrands', 
      [
        {

          brandName: "Samsung",
          createdAt: new Date(),
          updatedAt: new Date(),
          productsCategoryId: productCategoryId
        },
        {
          brandName: "Iphone",
          createdAt: new Date(),
          updatedAt: new Date(),
          productsCategoryId: productCategoryId
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('PhoneBrands', null, {});
  }
};
