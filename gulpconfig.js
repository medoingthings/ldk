/**
 * Global Configuration for Gulp Tasks
 */
module.exports = {
    autoprefixer: {
        browsers: ['last 2 versions'],
        cascade: false
    },
    assets: {
        src: 'assets/**/*.*',
        dest: './www/public/assets'
    },
    css: {
        dest: './www/public/dist/css'
    },
    js: {
        dest: 'www/public/dist/js'
    },
    templates: {
        src: 'templates/**/*.html',
        dest: 'www/craft/templates'
    },
    modernizr: {
        settings: {
            'cache' : true,
            'options' : [
                    'setClasses',
                    'html5printshiv'
                ],
            'devFile' : 'bower_components/modernizr/modernizr.js'
        }
    },
    sass: {
        modules: 'modules/**/*.scss'
    }
}
