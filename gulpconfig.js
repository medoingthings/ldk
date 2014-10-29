/**
 * Global Configuration for Gulp Tasks
 */
module.exports = {
    assets: {
        src: 'assets/**/*.*',
        dest: './www/public/assets'
    },
    autoprefixer: {
        browsers: ['last 2 versions'],
        cascade: false
    },
    clean: {
        src: ['www/public/dist/**', 'www/public/assets/**']
    },
    css: {
        dest: './www/public/dist/css'
    },
    js: {
        src: ['bower_components/picturefill/dist/picturefill.min.js'],
        dest: 'www/public/dist/js'
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
    },
    templates: {
        src: 'templates/**/*.html',
        dest: 'www/craft/templates'
    }
}
