'use strict';

var gulp  =   require('gulp'),

  sass  =   require('gulp-sass'),
  sassLint = require('gulp-sass-lint'),
  minifyCSS = require('gulp-minify-css'),
  autoprefixer = require('gulp-autoprefixer'),

  rename = require('gulp-rename'),
    connect =   require('gulp-connect'),
    open  =   require('gulp-open'),
    concat  =   require('gulp-concat'),
    port = process.env.port || 3031;

require('es6-promise').polyfill(); // polyfill the Promise API to support node 0.10


// launch index into default browser 
gulp.task('open', function(){
  var options = {
    uri: 'http://localhost:' + port
  };
  gulp.src('index.html')
    .pipe(open(options));
});


// live reload server
gulp.task('connect', function(){
  connect.server({
    root: '.',
    port: port,
    livereload: true
  });
});


// sass compiler to css
gulp.task('sass', function () {
  gulp.src('./assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});


// Lint for scss files 
gulp.task('sass-lint', function () {
  gulp.src('./assets/scss/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

// css processing and live reload
gulp.task('css', function(){
  gulp.src('./assets/css/*.css')
    .pipe(minifyCSS())
    .pipe(rename('styles.min.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('./assets/css'))
    .pipe(connect.reload());
});


// live reload html
gulp.task('html', function(){
  gulp.src('./index.html')
    .pipe(connect.reload());
});


// watch files for live reload
gulp.task('watch', function(){
    gulp.watch('./assets/scss/**/*.scss', ['sass']);
    gulp.watch('./index.html', ['html']);
});


// Gulp named tasks
gulp.task('default', ['open']);

gulp.task('build', ['sass', 'css']);
gulp.task('lint', ['sass-lint']);
gulp.task('serve', ['connect', 'open', 'watch']);



