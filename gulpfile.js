const gulp = require('gulp');
const gzip = require('gulp-gzip');

gulp.task('compress', function() {
  return gulp.src(['./dist/angular-library-to-web-components-demo/library/*.js'])
      .pipe(gzip())
      .pipe(gulp.dest('./dist/angular-library-to-web-components-demo/library'));
});