'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-ruby-sass');
var server = require('gulp-webserver');
var runSequence = require('run-sequence');
var vendor = require('gulp-concat-vendor');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('build', function() {
    runSequence(
        'clean',
        'vendor',
        ['copy-src-ng', 'copy-src-scss', 'copy-src-img']
    )
})

gulp.task('watch', function(cb) {
    gulp.watch('src/**/*', ['build']);
})

gulp.task('clean', function() {
    return gulp.src('dist/*')
    .pipe(clean().on('error', error));
})

gulp.task('vendor', function() {
    return gulp.src('vendor/*')
    .pipe(vendor('vendor.js').on('error', error))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-src-scss', function() {
    return sass('src/scss/app.scss')
    .pipe(cssmin())
    .on('error', sass.logError)
    .pipe(gulp.dest('dist/'));
})

gulp.task('copy-src-ng', function() {
    return gulp.src('src/js/**/*.js')
    .pipe(ngAnnotate().on('error', error))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('copy-src-img', function() {
    return gulp.src('src/img/**/*')
    .pipe(gulp.dest('dist/img/'));
})

gulp.task('server', function() {
    return gulp.src('dist/')
    .pipe(server({ }));
})

gulp.task('default', function () {
    return gulp.src('*.js')
    .pipe(gulp.dest('*.js'));
});

function error( e ) {
    console.error(e);
}
