'use strict';
module.exports.getMeetings = (req, res, next) => {
	const { Meeting } = req.app.get('models');
	Meeting.findAll({ order: ['id'] })
	.then( (Meetings) => {
		res.status(200).json(Meetings)
	})
	.catch( (err) => {
		next(err)
	});
};
