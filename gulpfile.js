'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var htmlmin = require('gulp-htmlmin');
var server = require('gulp-webserver');
var runSequence = require('run-sequence');
var vendor = require('gulp-concat-vendor');
var ngAnnotate = require('gulp-ng-annotate');
var ngTemplates = require('gulp-ng-templates');

gulp.task('build', function() {
    runSequence(
        'ng-templates',
        ['copy-src-ng', 'copy-src-scss', 'copy-src-img']
    );
})

gulp.task('vendor', function() {
    runSequence(
        'vendor-js',
        'vendor-css'
    );
})

gulp.task('watch', function(cb) {
    gulp.watch('src/**/*', ['build']);
})

gulp.task('clean', function() {
    return gulp.src('dist/*')
    .pipe(clean().on('error', error));
})

gulp.task('vendor-js', function() {
    return gulp.src('vendor/*')
    .pipe(vendor('vendor.js').on('error', error))
    .pipe(uglify())
    .on('error', error)
    .pipe(gulp.dest('dist/'));
});

gulp.task('vendor-css', function() {
  return gulp.src([
    'vendor/animate.css/animate.min.css'
  ])
  .pipe(concat('vendor.css'))
  .pipe(cssmin())
  .pipe(gulp.dest('dist/'));
})

gulp.task('copy-src-scss', function() {
    return sass('src/scss/app.scss')
    .pipe(cssmin())
    .on('error', sass.logError)
    .pipe(gulp.dest('dist/'));
})

gulp.task('copy-src-ng', function() {
    return gulp.src('src/js/**/*.js')
    .pipe(ngAnnotate().on('error', error))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
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

gulp.task('ng-templates', function() {
    return gulp.src('src/html/ng-app/**/*')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(ngTemplates({
        filename: 'templates.js',
        module: 'Rcorrie.templates',
        path: '/templates'
    }))
    .pipe(gulp.dest('dist/'));
})

function error( e ) {
    console.error(e);
}
