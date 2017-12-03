var keystone = require('keystone');
var moment = require('moment')



exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals


	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {
	  happenings: [],
	};

	view.on('init', function(next){
	 	keystone.list('Happening').model.find().exec(function(err, results){
			if (err || !results.length) {
				return next(err);
			}
			locals.data.happenings = results
			console.log(locals.data.happenings)
			next(err)
		})
 })

	// Render the view
	view.render('index',locals.data.happenings);

};
