'use strict';
module.exports.getMeetings = (req, res, next) => {
	const { Meeting } = req.app.get('models');
	Meeting.findAll({ order: ['id'] })
	.then( (Meetings) => {
		res.render('allMeetings', {	Meetings })
	})
	.catch( (err) => {
		next(err)
	});
};
