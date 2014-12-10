/**
 * Initialize scripts via browserify
 */

var attachFastClick = require('fastclick');
var gallery = require('./gallery/gallery');
var navigationMain = require('./navigation/navigation-main');

// Remove 300ms delay for clicks on touch devices
attachFastClick(document.body);

navigationMain.init();
gallery.init();
