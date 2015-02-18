'use strict';

/**
 * Form Select Value
 * Selects the value of all input fields with the
 * class .js-form-select-value-on-click on click
 *
 * @return {void}
 * @exports {function} init Module initialization
 */

/**
 * Attach the event listeners
 * @return {void}
 */

var init = function () {
    var $selectValueElements = document.querySelectorAll('.js-form-select-value-on-click');

    // Attach an event listener to each social wrapper
    Array.prototype.forEach.call($selectValueElements, function ($this, i) {
        $this.addEventListener('click', _selectValueText);
    });
}

/**
 * Select the text of the given input element
 * @return {void}
 */

var _selectValueText = function () {
    this.select();
};

exports.init = init;
