'use strict';

/**
 * Sets up a WYSIWYG editor for the richtext field that users can fill out to
 * edit their details. To make it work it prevents the default submit,
 * serializes the rich text content and submits the form afterwards.
 *
 * Note:
 * Works only with one textarea having the ID `form-profile__form--edit` for now
 *
 * @exports {function} init Module initialization
 */

var MediumEditor = require('medium-editor');

var init = function () {

    var _settings = {
        classNameEditable: 'js-form-profile--editable',
        editorOptions: {
            anchorInputPlaceholder: 'Link-Adresse einfügen',
            updateOnEmptySelection: true,
            staticToolbar: true,
            checkLinkFormat: true,
            firstHeader: 'h2',
            secondHeader: 'h3',
            buttonLabels: {
                'bold': '<b>Fett</b>',
                'anchor': 'Link einfügen',
                'unorderedlist': 'Liste'
            },
            buttons: ['bold', 'anchor', 'unorderedlist', 'header1', 'header2']
        },
        targetBlank: true
    }

    var editor;
    var $textarea       = document.getElementById('introduction');
    var $textareaParent = $textarea.parentNode;
    var $editor         = document.createElement('div');
    var $form           = document.getElementById('form-profile__form--edit');
    var placeholderText = $textarea.getAttribute('placeholder');

    // Set up the DIV element that the user will interact with
    $editor.classList.add(_settings.classNameEditable, 'form__editor');
    $editor.innerHTML = $textarea.value;
    $editor.setAttribute('data-placeholder', placeholderText);

    $textarea.classList.add('is-hidden');

    $textareaParent.insertBefore($editor, $textarea);

    // Editor documentation: https://github.com/daviferreira/medium-editor
    editor = new MediumEditor('.js-form-profile--editable', _settings.editorOptions);

    $form.addEventListener('submit', function (event) {
        event.preventDefault();

        var data = editor.serialize();
        $textarea.value = data['element-0'].value;

        $form.submit();
    });
}

exports.init = init;
