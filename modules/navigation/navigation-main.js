'use strict';

/**
 * Main Navigation
 * Toggles the main navigation for mobile devices open and close
 *
 * @exports {function} init Module initialization
 */

// Helps removing the 300ms delay for clicks on touch devices
var fastclick = require('fastclick');

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
    classNameOpenDesktop: '_is-open--desktop',
    classNameToggleMobile: 'navigation-main__level-toggle',
    classNameOpenGlobal: 'navigation-main--is-open'
};

/**
 * Initialize the module by adding event listeners and stuff
 *
 * @return {void}
 */

var init = function () {

    // Remove 300ms click delay on touch
    fastclick.FastClick.attach($navigation);
    fastclick.FastClick.attach($navigationToggle);

    $navigation.addEventListener('click', _onNavigationClick, false);
    $navigationToggle.addEventListener('click', _toggleNavigation, false);
}

/**
 * Toggle the navigation open and close
 *
 * @return {void}
 */

var _toggleNavigation = function (event) {
    event.preventDefault();

    if (isOpen) {
        $globalContainer.classList.remove(_settings.classNameOpenGlobal);
        isOpen = false;
    } else {
        $globalContainer.classList.add(_settings.classNameOpenGlobal);
        isOpen = true;
    }
};

/**
 * Handle clicks on the navigation
 *
 * @param {object} event JavaScript event object
 */

var _onNavigationClick = function (event) {
    var $target = event.target;

    // Delegate clicks on toggle buttons
    if ($target.classList.contains(_settings.classNameToggleMobile)) {
        _toggleNavigationLevel($target.parentNode);
    }
};

/**
 * Toggle the navigation levels
 *
 * @param {object} $navigationLevelItem Node of the navigation level that should toggle
 */
var _toggleNavigationLevel = function ($navigationLevelItem) {

    // Desktop only: Other nodes that might be open, but need to be closed before the new level is toggled
    var $openRelatives = $navigationLevelItem.parentNode.querySelectorAll('.' +  _settings.classNameOpenDesktop);

    // Desktop only: Iterate over each node to remove the given class
    [].map.call($openRelatives, function ($el) {

        if ($el !== $navigationLevelItem) {
            $el.classList.remove(_settings.classNameOpenDesktop);
        }
    });

    // Toggle class for mobile navigation
    $navigationLevelItem.classList.toggle(_settings.classNameOpenMobile);

    // Toggle class for desktop navigation
    $navigationLevelItem.classList.toggle(_settings.classNameOpenDesktop);
};

exports.init = init;
