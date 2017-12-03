var keystone = require('keystone');
var Types = keystone.Field.Types;
var moment = require('moment')

var Happening = new keystone.List('Happening',{
  map: {name: 'title'},
  autokey:{path:'slug', from: 'title', unique: true}
})

Happening.add({

  title: {
    type: String,
    required: true
  },

  description: {
    type: Types.Html,
    wysiwyg: true,
  }
})

Happening.register();
