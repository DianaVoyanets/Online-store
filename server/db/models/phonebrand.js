'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhoneBrand = sequelize.define('PhoneBrand', {
    markName: DataTypes.STRING
  });

  PhoneBrand.associate = function(models) {

  };
  return PhoneBrand;
};