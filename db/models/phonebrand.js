'use strict';
module.exports = (sequelize, DataTypes) => {
  const phoneBrand = sequelize.define('phoneBrand', {
    phone_brand: DataTypes.STRING
  }, {});
  phoneBrand.associate = function(models) {
    // associations can be defined here
  };
  return phoneBrand;
};