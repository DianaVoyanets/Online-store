'use strict';
module.exports = (sequelize, DataTypes) => {
  const productsCategories = sequelize.define('productsCategories', {
    productCategory: DataTypes.STRING
  });

productsCategories.associate = function(models) {
    models.productsCategories.hasMany(models.PhoneBrands,{ as: 'data' });
};
  
  return productsCategories;
};