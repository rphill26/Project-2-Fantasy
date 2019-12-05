'use strict';

const db = require("../models");

module.exports = (sequelize, DataTypes) => {
  const Teams = sequelize.define('Team', {
    name: DataTypes.STRING
  }, {
    timestamps: false
  });
  Teams.associate = function(models) {
    // associations can be defined here
    Teams.belongsTo(models.User);
    Teams.hasMany(models.Player);
  };
  return Teams;
};