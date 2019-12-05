'use strict';

const db = require("./user");

module.exports = (sequelize, DataTypes) => {
  const Players = sequelize.define('Player', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    position: DataTypes.STRING,
    club: DataTypes.STRING,
    nationality: DataTypes.STRING,
    clean_sheets: DataTypes.INTEGER,
    forward_rank: DataTypes.INTEGER,
    mid_rank: DataTypes.INTEGER,
    def_rank: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  Players.associate = function(models) {
    // associations can be defined here
    Players.belongsTo(models.User);
  };
  return Players;
};