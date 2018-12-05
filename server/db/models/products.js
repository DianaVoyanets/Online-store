'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    image: DataTypes.STRING,
    productName: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    rating: DataTypes.INTEGER
  });
  return Products;
};