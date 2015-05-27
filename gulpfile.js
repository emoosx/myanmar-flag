'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    ghPages = require('gulp-gh-pages');

var paths = {
    scss: ['app/scss/*.scss']
};

gulp.task('sass', function() {
    gulp.src(paths.scss)
        .pipe(sass({
            outputStyle: 'compressed',
            errLogToConsole: true
        }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(paths.scss, ['sass'])
        .on('change', livereload.changed);
});

gulp.task('deploy', function() {
  return gulp.src('./app/*')
});

gulp.task('default', ['watch', 'sass']);

