// run in terminal: npx gulp minify-js

// Dependencias
var gulp = require('gulp'),
babel = require('gulp-babel');
browserify = require('gulp-browserify'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
minifycss = require('gulp-minify-css'),
rename = require("gulp-rename");

// gulp.task('optimiza-web', ['minify-js', 'minify-css']);

gulp.task('minify-js', function (done) {
  gulp.src('source/*.js')
  // .pipe(concat('application.js'))
  .pipe(babel({
    presets: ['@babel/env']
    //plugins: ['@babel/transform-runtime']
  }))
  .pipe(rename(function (path) {
    path.basename += '-es5';
  }))
  // .pipe(uglify())
  // .pipe(rename(function (path) {
  //   path.basename += '-min';
  // }))
  .pipe(gulp.dest('build/'))
  done()
});

gulp.task('minify-css', function (done) {
  gulp.src('source/*.css')
  // .pipe(concat('application.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('build/'))
  done()
});