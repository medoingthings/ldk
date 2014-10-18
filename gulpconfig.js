/**
 * Global Configuration for Gulp Tasks
 */
module.exports = {
    autoprefixer: {
        browsers: ['last 2 versions'],
        cascade: false
    },
    css: {
        dest: './www/css'
    },
    js: {
        dest: 'www/js',
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
