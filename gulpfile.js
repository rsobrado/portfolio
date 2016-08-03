var gulp = require('gulp'),
    sass = require('gulp-sass');

// sass-to-css task
gulp.task('sass', function(){
  return gulp.src('scss/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
});

// watch task
gulp.task('watch',function() {
    gulp.watch('scss/**/*.scss',['sass']);
});

// default task
gulp.task('default',['sass','watch']);