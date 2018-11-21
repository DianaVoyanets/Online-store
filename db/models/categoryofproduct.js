'use strict';
module.exports = (sequelize, DataTypes) => {
  const categoryOfProduct = sequelize.define('categoryOfProduct', {
    categoryName: DataTypes.STRING
  }, {});
  categoryOfProduct.associate = function(models) {
    // associations can be defined here
  };
  return categoryOfProduct;
};