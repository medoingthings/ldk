'use strict';

var $ = require('jquery');
var MagnificPopup = require('magnific-popup');

var init = function () {
    $(document).ready(function() {
      $('.rtf-gallery-a').magnificPopup({type:'image'});
    });
}

exports.init = init;
