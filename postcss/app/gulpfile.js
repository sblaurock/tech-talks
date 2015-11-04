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
      //require('postcss-simple-vars')  // Sass-like variables
    //]))
    //.pipe(rename('compiled.css'))
    //.pipe(gulp.dest('assets'));
//});

// Process CSS - precss
//gulp.task('css', function () {
  //var postcss = require('gulp-postcss');

  //return gulp.src('assets/source.css')
    //.pipe(postcss([
      //require('precss')               // Sass-like functionality
    //]))
    //.pipe(rename('compiled.css'))
    //.pipe(gulp.dest('assets'));
//});

// Process CSS - precss + autoprefixer + oldie
//gulp.task('css', function () {
  //var postcss = require('gulp-postcss');

  //return gulp.src('assets/source.css')
    //.pipe(postcss([
      //require('precss'),              // Sass-like functionality
      //require('autoprefixer')({       // Vendor prefixes + fallbacks
        //browsers: ['IE 9', '> 1% in US']
      //}),
      //require('oldie'),                // IE fallbacks
    //]))
    //.pipe(rename('compiled.css'))
    //.pipe(gulp.dest('assets'));
//});

// Process CSS - precss + cssnext + autoprefixer
//gulp.task('css', function () {
  //var postcss = require('gulp-postcss');

  //return gulp.src('assets/source.css')
    //.pipe(postcss([
      //require('precss'),              // Sass-like functionality
      //require('cssnext')({            // Future proof + fallbacks
        //browsers: ['IE 9', '> 1% in US']
      //})
    //]))
    //.pipe(rename('compiled.css'))
    //.pipe(gulp.dest('assets'));
//});

// Process CSS - precss + cssnext + autoprefixer + tooling
//gulp.task('css', function () {
  //var postcss = require('gulp-postcss');

  //return gulp.src('assets/source.css')
    //.pipe(postcss([
      //require('precss'),              // Sass-like functionality
      //require('cssnext')({            // Future proof + fallbacks
        //browsers: ['IE 9', '> 1% in US']
      //}),
      //require('stylelint')({          // Linting
        //"rules": {
          //"declaration-colon-space-after": [1, "always"],
        //}
      //}),
      //require('cssnano')              // Minification
    //]))
    //.pipe(rename('compiled.css'))
    //.pipe(gulp.dest('assets'));
//});

// Process CSS - colorblind
//gulp.task('css', function () {
  //var postcss = require('gulp-postcss');

  //return gulp.src([
      //'assets/source.css'
    //])
    //.pipe(postcss([
      //require('postcss-colorblind')({      // Color bindness
        //method: 'deuteranopia',
        ////method: 'tritanopia',
        ////method: 'protanopia'
      //}),
    //]))
    //.pipe(rename('compiled.css'))
    //.pipe(gulp.dest('assets'));
//});

// Default
gulp.task('default', ['css', 'watch']);
