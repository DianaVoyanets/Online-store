'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    image: DataTypes.STRING,
    productName: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    rating: DataTypes.INTEGER
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};