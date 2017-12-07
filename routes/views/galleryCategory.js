var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'galleryCategory';
	locals.filters = {
		galleryCategory: req.params.galleryCategory,
	};
	locals.data = {
		posts: [],
		galleryCategories: [],
	};

	// Load all categories
	view.on('init', function (next) {

		keystone.list('galleryCategory').model.find().sort('name').exec(function (err, results) {

			if (err || !results.length) {
				return next(err);
			}

			locals.data.galleryCategoriescategories = results;
      next(err);
      console.log(local.data.galleryCategories)

			// Load the counts for each category
		// 	async.each(locals.data.categories, function (category, next) {
    //
		// 		keystone.list('gallery').model.count().where('categories').in([category.id]).exec(function (err, count) {
		// 			category.postCount = count;
		// 			next(err);
		// 		});
    //
		// 	}, function (err) {
		// 		next(err);
		// 	});
		});
	});

	// // Load the current category filter
	// view.on('init', function (next) {
  //
	// 	if (req.params.category) {
	// 		keystone.list('galleryCategory').model.findOne({ key: locals.filters.category }).exec(function (err, result) {
	// 			locals.data.category = result;
	// 			next(err);
	// 		});
	// 	} else {
	// 		next();
	// 	}
	// });

	// Load the posts
	// view.on('init', function (next) {
  //
	// 	var q = keystone.list('Gost').paginate({
	// 		page: req.query.page || 1,
	// 		perPage: 10,
	// 		maxPages: 10,
	// 		filters: {
	// 			state: 'published',
	// 		},
	// 	})
	// 		.sort('-publishedDate')
	// 		.populate('author categories');
  //
	// 	if (locals.data.category) {
	// 		q.where('categories').in([locals.data.category]);
	// 	}
  //
	// 	q.exec(function (err, results) {
	// 		locals.data.posts = results;
	// 		next(err);
	// 	});
	// });

	// Render the view
	view.render('gallery');
};
