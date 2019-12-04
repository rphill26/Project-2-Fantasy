'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      position: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      clean_sheets: {
        type: Sequelize.INTEGER
      },
      forward_rank: {
        type: Sequelize.INTEGER
      },
      mid_rank: {
        type: Sequelize.INTEGER
      },
      def_rank: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Players');
  }
};