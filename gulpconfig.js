/**
 * Global Configuration for Gulp Tasks
 */
module.exports = {
    assets: {
        src: 'assets/**/*.*',
        dest: './www/public/assets'
    },
    autoprefixer: {
        browsers: ['last 4 versions'],
        cascade: false
    },
    clean: {
        src: ['www/public/dist/**', 'www/public/assets/**']
    },
    copy: {
        js: {
            src: [
                'bower_components/picturefill/dist/picturefill.min.js',
                'bower_components/respond/dest/respond.min.js'
            ],
            dest: 'www/public/dist/js'
        }
    },
    css: {
        dest: './www/public/dist/css'
    },
    js: {
        src: 'modules/**/*.js',
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
