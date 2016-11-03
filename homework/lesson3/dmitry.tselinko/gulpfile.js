var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

gulp.task('build', function () {
  return gulp
    .src('src/autocomplete.js', {read: false})
    .pipe(browserify({
      insertGlobals : true
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});
