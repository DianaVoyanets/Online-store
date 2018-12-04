'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  });
  User.associate = function (models) {
    models.Users.belongsTo(models.Role);
  };
  return User;
};