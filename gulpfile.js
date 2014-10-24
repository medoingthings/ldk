var gulp = require('gulp');
var gulpconfig = require('./gulpconfig')

/**
 * Modules
 */
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var modernizr = require('gulp-modernizr');
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

gulp.task('modernizr', function() {
  gulp.src(gulpconfig.sass.modules)
    .pipe(modernizr(gulpconfig.modernizr.settings))
    .pipe(gulp.dest(gulpconfig.js.dest))
});

gulp.task('templates', function() {
  gulp.src(gulpconfig.templates.src)
    .pipe(gulp.dest(gulpconfig.templates.dest))
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch([gulpconfig.sass.modules, gulpconfig.templates.src], ['sass', 'templates'])
        .on('change', livereload.changed);
});
