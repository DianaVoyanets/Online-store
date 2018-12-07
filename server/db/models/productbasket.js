'use strict';
module.exports = (sequelize, DataTypes) => {
  const productBasket = sequelize.define('productBasket', {
    image: DataTypes.STRING,
    productName: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    amount: DataTypes.INTEGER,
    totalPrice: DataTypes.DOUBLE
  }, {});
  productBasket.associate = function(models) {
    // associations can be defined here
  };
  return productBasket;
};