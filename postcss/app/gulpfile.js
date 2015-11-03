var gulp = require('gulp');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

// Process CSS
gulp.task('css', function () {
  //var postcss = require('gulp-postcss');

  //return gulp.src('assets/source.css')
    //.pipe(postcss([
      //require('postcss-simple-vars')
    //]))
    //.pipe(rename('compiled.css'))
    //.pipe(gulp.dest('assets'));
//});

// Watch for changes
gulp.task('watch', function () {
    return gulp.watch([
        'assets/source.css'
    ], ['css']);
});

// Default
gulp.task('default', ['css', 'watch']);
