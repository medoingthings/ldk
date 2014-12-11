'use strict';

/**
 * Main Navigation
 * Toggles the main navigation for mobile devices open and close
 *
 * @exports {function} init Module initialization
 */

// Helps removing the 300ms delay for clicks on touch devices
var Tap = require('tap.js');

// Cache nodes
var $globalContainer  = document.querySelector('.layout-ldk__wrapper');
var $navigationToggle = document.querySelector('.navigation-main__toggle');
var $navigation       = document.querySelector('.navigation-main__wrapper');

// Save the state without touching the DOM
var isOpen = false;

// Settings for the module
var _settings = {
    classNameOpen: '_is-open',
    classNameOpenMobile: '_is-open--mobile',
    classNameToggleMobile: 'navigation-main__level-toggle',
    classNameOpenGlobal: 'navigation-main--is-open'
};

/**
 * Initialize the module by adding event listeners and stuff
 * @return {void}
 */

var init = function () {

    // Store instances from tap.js to remove 300ms click delay on touch
    var navigationTap = new Tap($navigation);
    var navigationToggleTap = new Tap($navigationToggle);

    // Apply previously created tap events
    $navigation.addEventListener('tap', _onNavigationClick, false);
    $navigationToggle.addEventListener('tap', _toggleNavigation, false);
}

/**
 * Toggle the navigation open and close
 * @return {void}
 */

var _toggleNavigation = function () {
    if (isOpen) {
        $globalContainer.classList.remove(_settings.classNameOpenGlobal);
        isOpen = false;
    } else {
        $globalContainer.classList.add(_settings.classNameOpenGlobal);
        isOpen = true;
    }
};

/**
 * Handle clicks on the navigation and delegate them
 * @param {object} event JavaScriot event object
 */

var _onNavigationClick = function (event) {
    var $button = event.target;

    if ($button.classList.contains(_settings.classNameToggleMobile)) {
        var $target = $button.parentNode;

        $target.classList.toggle(_settings.classNameOpenMobile);
    }
};

/**
 * Toggle the mobile navigation
 */
var _toggleMovileNavigation = function () {

};

exports.init = init;
