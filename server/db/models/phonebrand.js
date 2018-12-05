'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhoneBrands = sequelize.define('PhoneBrands', {
    markName: DataTypes.STRING
  });

  PhoneBrands.associate = function(models) {

  };
  return PhoneBrands;
};