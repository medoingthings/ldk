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

# Contributing
We’d be happy if you’d like to contribute front end fixes or features. Just
give me a shout if you need anything.
