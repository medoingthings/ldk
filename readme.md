# LDK-Website Dokumentation

## Coding Guidelines
BEM Style: https://bem.info/method/definitions/

## ZeptoJS dependency
Needs to be build like described in: https://github.com/madrobby/zepto#building

Do this:

* Go to zeptojs folder `cd bower_components/zeptojs`
* Run `MODULES="zepto event data ie" ./make dist`, add whatever new module is needed
* Move it to assets/js `mv dist/zepto.min.js ../../assets/js`
* Update this Readme with the new module chain
* Commit the new build and readme.md

## Redaktionell
Jedes Jahr muss einmal gepflegt werden, wann die jeweiligen Module stattfinden, damit die automatischen Teaser richtig funktionieren
