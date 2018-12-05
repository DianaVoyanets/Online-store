'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhoneBrands = sequelize.define('PhoneBrands', {
    markName: DataTypes.STRING
  });
  return PhoneBrands;
};