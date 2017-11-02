'use strict';
module.exports = (sequelize, DataTypes) => {
  var Meeting = sequelize.define('Meeting', {
    city: DataTypes.STRING,
    day: DataTypes.STRING,
    time: DataTypes.STRING,
    type: DataTypes.STRING,
    group: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Meeting;
};