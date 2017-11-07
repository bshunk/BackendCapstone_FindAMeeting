'use strict';

module.exports.getMeetings = (req, res, next) => {
  const { Meeting } = req.app.get('models');
	Meeting.findAll({ where: {day: req.params.day}})
	.then( (Meeting) => {
		res.status(200).json(Meeting)
	})
	.catch( (err) => {
    console.log('error', err);
		next(err)
	});
};
