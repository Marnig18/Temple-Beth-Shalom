var keystone = require('keystone');
var moment = require('moment')
var data = []


exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals


	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {
	  events: []
	};

	view.on('init', function (next) {
		keystone.list('Event').model.find().exec(function(err, results){
			{

				locals.data.events = results
				data.push(results)
				console.log(results)
				next(err);
			}
		 });
	});


	// Render the view
	view.render('index',
		{encodedJson : encodeURIComponent(JSON.stringify(data))
	});

};
