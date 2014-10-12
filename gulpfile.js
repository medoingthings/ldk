var gulp = require('gulp');
var gulpconfig = require('./gulpconfig')

/**
 * Modules
 */
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass')

/**
 * Gulp Tasks
 */
gulp.task('default', ['sass']);

gulp.task('sass', function () {
    gulp.src(gulpconfig.sass.mainfiles)
        .pipe(sass())
        .pipe(autoprefixer(gulpconfig.autoprefixer))
        .pipe(gulp.dest(gulpconfig.css.dest));
});

gulp.task('watch', function() {
  gulp.watch(gulpconfig.sass.modules, ['sass']);
});
