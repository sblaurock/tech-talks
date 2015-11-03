var gulp = require('gulp');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

// Watch for changes
gulp.task('watch', function () {
    return gulp.watch([
        'assets/source.css'
    ], ['css']);
});

// Process CSS - postcss-simple-vars
//gulp.task('css', function () {
  //var postcss = require('gulp-postcss');

  //return gulp.src('assets/source.css')
    //.pipe(postcss([
      //require('postcss-simple-vars')
    //]))
    //.pipe(rename('compiled.css'))
    //.pipe(gulp.dest('assets'));
//});

// Process CSS - precss
//gulp.task('css', function () {
  //var postcss = require('gulp-postcss');

  //return gulp.src('assets/source.css')
    //.pipe(postcss([
      //require('precss')
    //]))
    //.pipe(rename('compiled.css'))
    //.pipe(gulp.dest('assets'));
//});

// Default
gulp.task('default', ['css', 'watch']);
