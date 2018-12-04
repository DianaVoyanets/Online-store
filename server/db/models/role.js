'use strict';
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define('Role', {
    roleName: DataTypes.STRING
  });
  return Role;
};