var path = require("path");
var app = require("express");
var events = ('../models/events.js')
var keystone = require('keystone');

keystone.import('models');

// module.exports = function(app){
//
//   app.get('/events', function(req, res){
//     keystone.list('Event').model.find().exec(function(err, doc){
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(doc)
//         res.json(doc);
//       }
// 	   });
//
//   })
// }
