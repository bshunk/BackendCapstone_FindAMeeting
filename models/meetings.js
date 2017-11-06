'use srtict';
module.exports = (sequelize, DataTypes) => {
  var Meeting = sequelize.define('Meeting', {
    category: DataTypes.STRING,
    type: DataTypes.STRING,
    group: DataTypes.STRING,
    city: DataTypes.STRING,
    day: DataTypes.STRING,
    time: DataTypes.STRING,
    location: DataTypes.STRING
  }, {timestamps: false});

  Meeting.associate = (models) => {
    Meeting.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
  }
  return Meeting;
};
