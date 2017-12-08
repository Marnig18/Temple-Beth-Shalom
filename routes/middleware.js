/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
var _ = require('lodash');
var axios = require ('axios')


/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/
exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		{ label: 'Home', key: 'home', href: '/' },
		{ label: 'Reb on the Web', key: 'blog', href: '/blog' },
		// { label: 'Gallery', key: 'gallery', href: '/gallery' },
		// { label: 'Contact', key: 'contact', href: '/contact' },
	]

	res.locals.community  = [
		{label: "Teen Committee", key: 'teen', href: '/teencommittee'},
		{label: "Sisterhood", key: 'sisterhood', href: '/sisterhood'},
		{label: "Ritual Committee", key: 'ritual', href: '/ritualcommittee'},
		{label: "Mens Club", key: 'mens', href: '/mensclub'},
		{label: "TBS Cares", key: 'TBScares', href: '/tbscares'}
	];

	res.locals.education = [
		{label: "Religious School", key: 'religiousSchool', href: '/religiousschool'},
		{label: "B'nai Mitzvah", key: 'Bnaimitzvah', href: '/bnaimitzvah'},
		{label: "Adult Education", key: 'adultedu', href: '/adultedu'}
	]

	res.locals.worship = [
		{label: "High Holidays", key: 'highholidays', href: '/highholidays'},
		{label: "Prayers", key: 'prayers', href: '/prayers'}
	]

	res.locals.about = [
		{label: "Philosophy", key: 'philosophy', href: '/#philosophyDiv'},
		{label: "Calendar", key: 'calendar', href: '/#eventsDiv'},
		{label: "Board of Trustees", key: 'board', href: '/board'},
		{label: "Location", key: 'location', href: '/#locationDiv'},
		{label: "Staff", key: 'staff', href: '/staff'},
		{label: "Gallery", key: 'gallery', href: '/gallery'}
	]



	res.locals.user = req.user;

	next();

};


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
