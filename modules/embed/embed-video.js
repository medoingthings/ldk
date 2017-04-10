'use strict';

/**
 * Video embeds
 * Replace content in a teaser with a embedded video from YouTube or Vimeo
 *
 * @exports {function} init Module initialization
 */

var _settings = {

};

/**
 * Init
 *
 * @return {void}
 */
var init = function () {

    // Get all video embed elements
    var $triggerElements = document.querySelectorAll('.embed-video__link');

    // Stop if no video elements were present
    if (!$triggerElements.length) {
        return;
    }

    // Attach an event listener to each embed link
    Array.prototype.forEach.call($triggerElements, function ($embedLink, i) {
        $embedLink.addEventListener('click', _embedVideo);
    });
}

/**
 * Replace the teaser with the actual embedded video
 *
 * @param  {event} event JavaScript event object
 */
var _embedVideo = function (event) {
    var $this = event.currentTarget;
    var $parent = $this.parentNode;
    var $iframe = _createVideo($this.getAttribute('href'));

    event.preventDefault();
    $parent.innerHTML = '';
    $parent.append($iframe);

    $this.removeEventListener('click', _embedVideo);
}

/**
 * Parse YouTube or Vimeo url and return only the type and id
 * Borrowed from: https://gist.github.com/yangshun/9892961
 *
 * - Supported YouTube URL formats:
 *   - http://www.youtube.com/watch?v=My2FRPA3Gf8
 *   - http://youtu.be/My2FRPA3Gf8
 *   - https://youtube.googleapis.com/v/My2FRPA3Gf8
 * - Supported Vimeo URL formats:
 *   - http://vimeo.com/25451551
 *   - http://player.vimeo.com/video/25451551
 * - Also supports relative URLs:
 *   - //player.vimeo.com/video/25451551
 *
 * @return {object} {type: youtube|vimeo, id: [id]}
 */
var _parseVideo = function (url) {
    url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

    if (RegExp.$3.indexOf('youtu') > -1) {
        var type = 'youtube';
    } else if (RegExp.$3.indexOf('vimeo') > -1) {
        var type = 'vimeo';
    }

    return {
        type: type,
        id: RegExp.$6
    };
}

/**
 * Returns an iframe of the video with the specified URL.
 * @param  {string} url
 * @return {DOMelement} iFrame element
 */
var _createVideo = function (url) {
    var videoData = _parseVideo(url);
    var $iframe = document.createElement('iframe');

    $iframe.setAttribute('frameborder', 0);
    $iframe.setAttribute('allowfullscreen', true);
    $iframe.className = 'mosaic-tiles__inner';

    if (videoData.type == 'youtube') {
        $iframe.setAttribute('src', '//www.youtube.com/embed/' + videoData.id + '?autoplay=1&rel=0&amp;showinfo=0');
    } else if (videoData.type == 'vimeo') {
        $iframe.setAttribute('src', '//player.vimeo.com/video/' + videoData.id + '?autoplay=1');
    }

    return $iframe;
}

exports.init = init;
