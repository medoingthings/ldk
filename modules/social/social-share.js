'use strict';

/**
 * Social Share
 * Opens a pop-up window with the share pages from social networks
 *
 * @exports {function} init Module initialization
 */

var _settings = {
    classNameSocialWrapper: 'social-share__wrapper',
    classNameSocialLink: 'social-share__link',
    popupWidth: 600,
    popupHeight: 400
};

/**
 * Init
 *
 * @return {void}
 */
var init = function () {

    // Get all elements that have sharing links inside
    var $triggerElements = document.getElementsByClassName(_settings.classNameSocialWrapper);

    // Attach an event listener to each social wrapper
    Array.prototype.forEach.call($triggerElements, function ($socialLinkWrapper, i) {
        $socialLinkWrapper.addEventListener('click', _onSocialLinkClick);
    });
}

/**
 * Handle clicks on social links
 * Trigger the pop-up opening if the click target is a social link
 *
 * @param  {event} event JavaScript event object
 * @return {void}
 */
var _onSocialLinkClick = function (event) {
    var $target = event.target;

    if ($target.classList.contains(_settings.classNameSocialLink)) {
        event.preventDefault();

        _openPopup($target.getAttribute('href'));
    }
}

/**
 * Opens a pop-up in the center of the users screen
 *
 * @param {string} url Sharing url that should be opened in the pop-up
 * @return {void}
 */

var _openPopup = function (url) {
    var posX = (screen.width / 2) - _settings.popupWidth / 2,
        posY = (screen.height / 2) - _settings.popupHeight / 2;

    window.open(url, '',
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' +
        'width=' + _settings.popupWidth + ',' +
        'height=' + _settings.popupHeight + ',' +
        'left=' + posX + ',' +
        'top=' + posY
    );
};

exports.init = init;
