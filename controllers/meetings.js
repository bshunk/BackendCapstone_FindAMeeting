'use strict';

const { getMeetings } = require('../models/Meetings');

module.exports.getMeetings = (req, res, next) => {
  getAllMeetings()
  .then( (meetings) => {
    res.status(200).json(meetings);
  })
  .catch( (err) => next(err));
};

// module.exports.getProducts = (req, res, next) => {
//   getAllProducts()
//   .then( (products) => {
//     res.status(200).json(products);
//   })
//   .catch( (err) => next(err));
// };
