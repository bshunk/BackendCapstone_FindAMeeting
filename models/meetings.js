'use srtict';
module.exports = (sequelize, DataTypes) => {
  var Meeting = sequelize.define('Meeting', {
    city: DataTypes.STRING,
    day: DataTypes.STRING,
    time: DataTypes.STRING,
    type: DataTypes.STRING,
    group: DataTypes.STRING,
    location: DataTypes.STRING
  }, {timestamps: false});

  Meeting.associate = (models) => {
    Meeting.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
  }
  return Meeting;
};
