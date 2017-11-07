'use strict';
 
module.exports.getMeetings = (req, res, next) => {
  console.log("TEST");
	const { Meeting } = req.app.get('models');
	Meeting.findAll()
	.then( (Meetings) => {
		res.status(200).json(Meetings)
	})
	.catch( (err) => {
    console.log('error', err);
		next(err)
	});
};
