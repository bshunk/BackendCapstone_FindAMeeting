'use strict';
let { Meetings } = require('../data/meetings.json')
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Meetings', Meetings, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('Meetings', null, {});
  }
};


// 'use strict';
// let { computers } = require('./data/computer.json')
// module.exports = {
//   up: function (queryInterface, Sequelize) {
//     /*
//       Add altering commands here.
//       Return a promise to correctly handle asynchronicity.
//     */
//     return queryInterface.bulkInsert('Computers', computers, {});
//   },

//   down: function (queryInterface, Sequelize) {
//     /*
//       Add reverting commands here.
//       Return a promise to correctly handle asynchronicity.
//     */
//     return queryInterface.bulkDelete('Computers', null, {});
//   }

