var keystone = require('keystone');
var Types = keystone.Field.Types;


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
    index: true,
    initial: false
  },
  end: {
    type: Types.Datetime,
    index: true,
    initial: false
  },
  description: {
    type: Types.Html,
    wysiwyg: true
  }
})

Event.defaultColumns = 'title, startDate, endDate, content';

Event.register();
