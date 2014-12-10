/**
 * Initialize scripts via browserify
 */

var gallery = require('./gallery/gallery');
var navigationMain = require('./navigation/navigation-main');

navigationMain.init();
gallery.init();
