'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    productName: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    bayerName: DataTypes.STRING,
    bayerEmail: DataTypes.STRING,
    address: DataTypes.STRING,
    delivery: DataTypes.STRING,
    payment: DataTypes.STRING,
    status: DataTypes.STRING,
    phone:  DataTypes.STRING
  }, {});
  orders.associate = function(models) {
    // associations can be defined here
  };
  return orders;
};