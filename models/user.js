'use strict';

const db = require("../models");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Player);
    User.hasOne(models.Team);
  };
  return User;
};