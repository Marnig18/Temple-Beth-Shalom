var keystone = require('keystone');
var Types = keystone.Field.Types;
var moment = require('moment')


/**
 *  Events Model
 * ==========
 */
var Event = new keystone.List('Event',{
  map: {name: 'title'},
  autokey:{path:'slug', from: 'title', unique: true}
})

Event.add({
  title: {
    type: String,
    required: true,

  },
  start: {
    type: Types.Datetime,
    parseFormat: ['YYYY-MM-DD', 'YYYY-MM-DD h:m:s a', 'YYYY-MM-DD h:m a', 'YYYY-MM-DD H:m:s', 'YYYY-MM-DD H:m', 'YYYY-MM-DD h:mm:s a Z', moment.ISO_8601]


  },

  end: {
    type: Types.Datetime,
    parseFormat: ['YYYY-MM-DD', 'YYYY-MM-DD h:m:s a', 'YYYY-MM-DD h:m a', 'YYYY-MM-DD H:m:s', 'YYYY-MM-DD H:m', 'YYYY-MM-DD h:mm:s a Z', moment.ISO_8601]

  },

  recurring:{
      type: Boolean
  },

  Monday:{
    type: Boolean,
    dependsOn: {recurring: true}
  },
  Tuesday:{
    type: Boolean,
    dependsOn: {recurring: true}
  },
  Wednesday:{
    type: Boolean,
    dependsOn: {recurring: true}
  },
  Thursday:{
    type: Boolean,
    dependsOn: {recurring: true}
  },
  Friday:{
    type: Boolean,
    dependsOn: {recurring: true}
  },
  Saturday:{
    type: Boolean,
    dependsOn: {recurring: true}
  },
  Sunday:{
    type: Boolean,
    dependsOn: {recurring: true}
  },

  description: {
    type: Types.Html,
    wysiwyg: true
  },



})



Event.register();
