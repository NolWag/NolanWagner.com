var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var gutil = require('gulp-util');

gulp.task('sass', function() {
  return gulp.src('./scss/styles.scss')
  .pipe(sass())
    .pipe(gulp.dest('./css'))
});


gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});

gulp.task('watch', function() {
  gulp.watch('./scss/*.scss', ['sass'])
  gulp.watch('./js/*.js', ['js'])
});

gulp.task('default', ['sass', 'connect', 'watch']);
