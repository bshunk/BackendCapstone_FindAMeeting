'use strict';

module.exports.getAllMeeting = (req, res, next) => {
  const { Meeting } = req.app.get('models');
  Meeting.findAll()
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
}

// module.exports.getAllProducts = (req, res, next) => {
// 	const { Product } = req.app.get('models');
// 	Product.findAll({ order: ['id'] })
// 	.then( (Prods) => {
// 		Prods.reverse();
// 		res.render('allProducts', {	Prods	})
// 	})
// 	.catch( (err) => {
// 		next(err)
// 	})
// };

// select * from "Meetings";

// const getMeeting = (category, type, group, city, day, time, location) => {
//   return new Promise( (resolve, reject) => {
//     console.log("category", category);
//   })
// }

