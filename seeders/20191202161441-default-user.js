'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
    {
      // Tamara
      email: "tgolub89@gmail.com	",
      password: "test",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      // Osvaldo
      email: "owebstudent@gmail.com",
      password: "test",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      // Randall
      email: "rphill45@uncc.edu",
      password: "test",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      // Amanda
      email: "surberaleigh@gmail.com	",
      password: "test",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
