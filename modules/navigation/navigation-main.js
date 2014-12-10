'use strict';

/**
 * Main Navigation
 * Toggles the main navigation for mobile devices open and close
 *
 * @exports {function} init Module initialization
 */

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
    $navigationToggle.addEventListener('click', _toggleNavigation);
    $navigation.addEventListener('click', _onNavigationClick);
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
