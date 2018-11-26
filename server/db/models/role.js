'use strict';
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define('Role', {
    roleName: DataTypes.SRING
  });
  return Role;
};