var keystone = require('keystone');

/**
 * PostCategory Model
 * ==================
 */

var GalleryCategory = new keystone.List('GalleryCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

GalleryCategory.add({
	name: { type: String, required: true },
	
});

GalleryCategory.relationship({ ref: 'Gallery', path: 'gallery', refPath: 'categories' });

GalleryCategory.register();
