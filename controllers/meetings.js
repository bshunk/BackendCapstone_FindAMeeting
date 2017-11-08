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
	const { Meeting } = req.app.get('models');
	Meeting.create({
		category: req.body.category,
		type: req.body.type,
		group: req.body.type,
		city: req.body.city,
		day: req.body.day,
		time: req.body.time,
		location: req.body.location
	})
	.then( (data) => {
		res.status(200).redirect(`/meeting/${data.dataValues.id}`);
	})
	.catch( (err) => {
		res.status(200).json(err);
	});
};
