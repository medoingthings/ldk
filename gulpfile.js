var gulp = require('gulp');
var gulpconfig = require('./gulpconfig')

/**
 * Modules
 */
var autoprefixer = require('gulp-autoprefixer');
var browserify   = require('gulp-browserify');
var del          = require('del');
var livereload   = require('gulp-livereload');
var modernizr    = require('gulp-modernizr');
var sass         = require('gulp-sass')
var uglify       = require('gulp-uglify');

/**
 * Gulp Build Tasks
 */

gulp.task('default', ['sass', 'javascript']);
gulp.task('build', ['modernizr', 'sass', 'assets', 'javascript', 'copy', 'templates']);

/**
 * Gulp Tasks
 * @return {[type]} [description]
 */

gulp.task('assets', function () {
  gulp.src(gulpconfig.assets.src)
    .pipe(gulp.dest(gulpconfig.assets.dest))
});

gulp.task('clean', function (callback) {
  del(gulpconfig.clean.src, callback);
});

gulp.task('copy', function () {
  gulp.src(gulpconfig.copy.js.src)
    .pipe(gulp.dest(gulpconfig.copy.js.dest))
});

gulp.task('javascript', function () {
    gulp.src('modules/*.js')
        .pipe(browserify())
        .on('error', function (error) {
            console.log(error.message);
        })
        .pipe(uglify())
        .pipe(gulp.dest(gulpconfig.js.dest));
});

gulp.task('modernizr', function () {
  gulp.src(gulpconfig.sass.modules)
    .pipe(modernizr(gulpconfig.modernizr.settings))
    .pipe(uglify())
    .pipe(gulp.dest(gulpconfig.js.dest))
});

gulp.task('sass', function () {
    gulp.src(gulpconfig.sass.modules)
        .pipe(sass({
            outputStyle : 'compressed',
            errLogToConsole: true
        }))
        .pipe(autoprefixer(gulpconfig.autoprefixer))
        .pipe(gulp.dest(gulpconfig.css.dest));
});

gulp.task('templates', function () {
  gulp.src(gulpconfig.templates.src)
    .pipe(gulp.dest(gulpconfig.templates.dest))
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch([gulpconfig.sass.modules, gulpconfig.templates.src, gulpconfig.js.src], ['sass', 'templates', 'javascript'])
        .on('change', livereload.changed);
});
