/**
 * Initialize Core Scripts via Browserify
 */

var formSelectValue = require('./forms/form-select-value');
var gallery = require('./gallery/gallery');
var navigationMain = require('./navigation/navigation-main');
var socialShare = require('./social/social-share');

formSelectValue.init();
navigationMain.init();
gallery.init();
socialShare.init();
