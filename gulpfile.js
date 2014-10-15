var gulp = require('gulp');
var gulpconfig = require('./gulpconfig')

/**
 * Modules
 */
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass')

/**
 * Gulp Tasks
 */
gulp.task('default', ['sass']);

gulp.task('sass', function () {
    gulp.src(gulpconfig.sass.modules)
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer(gulpconfig.autoprefixer))
        .pipe(gulp.dest(gulpconfig.css.dest));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(gulpconfig.sass.modules, ['sass'])
        .on('change', livereload.changed);
});
