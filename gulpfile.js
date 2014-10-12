var gulp = require('gulp');
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    gulp.src('./src/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./www/css'));
});

gulp.task('default', function() {
  // place code for your default task here
});

