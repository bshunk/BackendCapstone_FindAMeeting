const {Meetings} = require('./meetings.json');
let sequelize = require('sequelize');
let queryInterface = require('sequelize/lib/query-interface');

let rollDB = (queryInterface) => {
    const app = require('../app');
    const models = app.get('models');
    const server = require('../app');
    return models.sequelize.sync({force: true})
    .then( (queryInterface) => {
        return models.User.bulkCreate(Meetings);
    })
    .catch( (err)=> {
        console.log("ERRRR", err);
    })
};

rollDB(queryInterface);

module.exports = rollDB;
