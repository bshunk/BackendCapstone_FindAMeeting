'use strict';

module.exports.getMeetings = (req, res, next) => {
  const { Meeting } = req.app.get('models');
	Meeting.findAll({ where: {day: req.params.day, time: req.params.time, city: req.params.city} })
	.then( (Meeting) => {
		res.status(200).json(Meeting)
	})
	.catch( (err) => {
    console.log('error', err);
		next(err)
	});
};

module.exports.addNewMeeting = (req, res, next) => {
	console.log("addNewMeeting Running?");
	console.log(req.body);
	const { Meeting } = req.app.get('models');
	Meeting.create({
		category: req.body.category,
		type: req.body.type,
		group: req.body.group,
		city: req.body.city,
		day: req.body.day,
		time: req.body.time,
		location: req.body.location
	})
	.then( (data) => {
		console.log('DATA IN BACK CTRL', data.dataValues);
		// Meeting.findAll({ where: {day: req.params.day, time: req.params.time, city: req.params.city} })
		// .then( (Meeting) => {
		// 	res.status(200).json(Meeting)
		// })
		// .catch( (err) => {
		// 	console.log('error', err);
		// 	next(err)
		// });
		res.status(200).render(data.dataValues);
	})
	.catch( (err) => {
		res.status(200).json(err);
	});
};
