'use strict';

const getAllMeetings = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM meetings`, (err, meeting) => {
      if (err) return reject(err);
      resolve(meeting);
    });
  });
};

// module.exports = (sequelize, DataTypes) => {
//   var Meeting = sequelize.define('Meeting', {
//     category: DataTypes.STRING,
//     type: DataTypes.STRING,
//     group: DataTypes.STRING,
//     city: DataTypes.STRING,
//     day: DataTypes.STRING,
//     time: DataTypes.STRING,
//     location: DataTypes.STRING
//   }, {timestamps: false});

//   Meeting.associate = (models) => {
//     Meeting.belongsTo(models.User, {
//       foreignKey: 'user_id'
//     });
//   }
//   return Meeting;
// };

// const  getAllProducts = () => {
//   return new Promise( (resolve, reject) => {
//     db.all(`SELECT * FROM products`, (err, product) => {
//       if (err) return reject(err);
//       resolve(product);
//     });
//   });
// };
