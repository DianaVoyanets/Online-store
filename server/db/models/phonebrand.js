'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhoneBrands = sequelize.define('PhoneBrands', {
    brandName: DataTypes.STRING
  });

  PhoneBrands.associate = function(models) {
    models.PhoneBrands.hasMany(models.Products,{as: 'data'});
  };
  return PhoneBrands;
};