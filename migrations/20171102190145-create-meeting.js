'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Meetings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      group: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      day: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Meetings');
  }
};