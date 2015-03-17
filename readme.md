[ ![Codeship Status for medoingthings/ldk](https://codeship.com/projects/25a7f700-7330-0132-e828-668408718eb6/status?branch=master)](https://codeship.com/projects/54897)

# Documentation for www.leadership-digitale-kommunikation.de

## Getting Started
Make sure [Node](nodejs.org) is installed on your machine.

Then run `npm i`. It will install all the necessary dependencies.

Now run `gulp build` to build all the relevant assets.

## Coding Guidelines
BEM Style: https://bem.info/method/definitions/

## ZeptoJS dependency
If new features of ZeptoJS are required, it needs to be build like described
here: https://github.com/madrobby/zepto#building

### Do this:

* Go to zeptojs folder `cd bower_components/zeptojs`
* Run `MODULES="zepto event data ie" ./make dist`, add whatever new module is needed
* Move it to assets/js `mv dist/zepto.min.js ../../assets/js`
* Update this Readme with the new module chain
* Commit the new build and readme.md

## Add more icons
Use [IcoMoon](https://icomoon.io/app/) to generate a new icon font. Follow these steps:

* Go to [icomoon.io/app/](https://icomoon.io/app/)
* Click `Import Icons` at the top left
* Upload the `selection.json` file – it’s located in the repository in `/assets/fonts`
* Add all the icons you need. Use reasonable area codes and see if there are other codes that are related to the new icon. E. g. if there was a new file icon, place it at `\e62x`.
* Generate a new icomoon icon set
* Unzip it and replace the font files in `/assets/fonts`
* Edit `/modules/base/_icons.scss`
    * Update the cache busting hash in the `@font-face` declaration (take the hash from `style.css` out of the icomoon set)
    * Extend the `$base-icons` map with the new names and codes
* Run `gulp build` – this copies the new font files to the right place

# Contributing
We’d be happy if you’d like to contribute front end fixes or features. Just
give me a shout if you need anything.
