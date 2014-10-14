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
    sass: {
        modules: 'modules/**/*.scss'
    }
}