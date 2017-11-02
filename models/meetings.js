'use srtict';
module.exports = (sequelize, DataTypes) => {
  var Meeting = sequelize.define('Product', {
    city: DataTypes.STRING,
    day: DataTypes.STRING,
    time: DataTypes.STRING,
    type: DataTypes.STRING,
    group: DataTypes.STRING,
    location: DataTypes.STRING
  }, {timestamps: false});

  Product.associate = (models) => {
    Product.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
  }
  return Meeting;
};
