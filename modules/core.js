/**
 * Initialize scripts via browserify
 */

var gallery = require('./gallery/gallery');
var navigationMain = require('./navigation/navigation-main');
var socialShare = require('./social/social-share');

navigationMain.init();
gallery.init();
socialShare.init();
