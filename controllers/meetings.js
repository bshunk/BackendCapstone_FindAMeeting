'use strict';

// called from the front end factory, retrieves meetings from the DB based on what the user has selected for day, time, and city
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

//called from the front end factory, posts a new meeting to the DB based on what the user has filled out in the form and returns the data to a new view
module.exports.addNewMeeting = (req, res, next) => {
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
		res.status(200).render(data.dataValues);
	})
	.catch( (err) => {
		res.status(200).json(err);
	});
};
