'use strict';

var gulp       = require('gulp');
var $          = require('gulp-load-plugins')();
var concat     = require('gulp-concat');
var source     = require('vinyl-source-stream');
var sass       = require('gulp-sass');
var rename     = require('gulp-rename');
var minifyCSS  = require('gulp-minify-css');
var uglify     = require('gulp-uglify');
var gulpServer = require('gulp-live-server');
var browserify = require('browserify');
var watchify   = require('watchify');
var streamify = require('gulp-streamify');
var uglify     = require('gulp-uglify');
var caseVerify = require('dep-case-verify');
var babelify   = require('babelify');
var reactify   = require('reactify');

var SOURCE_DIR = __dirname + '/js-app/';
var DEST_DIR = __dirname + '/public/';

function onError() {
    /* jshint ignore:start */
    var args = Array.prototype.slice.call(arguments);
    $.util.beep();
    $.notify.onError({
        title: "Compile Error",
        message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
    /* jshint ignore:end */
}

gulp.task('app-scss', function() {
    return gulp.src( SOURCE_DIR + 'styles/main.scss')
        .pipe($.plumber({errorHandler: onError}))
        .pipe(sass())
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(rename('style.css'))
        .pipe(gulp.dest(DEST_DIR + 'stylesheets'))
        .pipe($.size());
});

gulp.task('vendor-css', function() {
    return gulp.src([
        SOURCE_DIR + '/vendor/ratchet/css/ratchet.css',
        SOURCE_DIR + '/vendor/react-spinner/react-spinner.css'
    ])
        .pipe(concat('vendor.css'))
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(rename('vendor.css'))
        .pipe(gulp.dest(DEST_DIR + 'stylesheets'))
});

gulp.task('vendor-js', function() {
    return gulp.src([
        SOURCE_DIR + '/vendor/jquery/dist/jquery.min.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(rename("vendor.js"))
        .pipe(gulp.dest( DEST_DIR + 'javascripts'))
});

gulp.task('app-js', function() {
    var bundler;
    bundler = browserify({
        basedir: __dirname,
        entries: [SOURCE_DIR +  'app.jsx'],
        transform: [babelify, reactify, ['envify', {'global': true, '_': 'purge', NODE_ENV: 'development'}]],
        extensions: ['.jsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    });

    bundler.plugin(caseVerify);
    bundler = watchify(bundler);

    function rebundle() {
        console.log('Building Scripts...');
        var start = Date.now();
        return bundler.bundle()
            .on('error', onError)
            .pipe(source("app.js"))
            //.pipe(streamify(uglify().on('error', gutil.log)))
            .pipe(gulp.dest( DEST_DIR + 'javascripts'))
            .pipe($.notify(function() {
                console.log('Building Complete - ' + (Date.now() - start) + 'ms');
            }))
    }

//    bundler.on('update', rebundle);

    return rebundle();
});

gulp.task('serve', function() {
    var express_file = __dirname + '/bin/www';
    var server = gulpServer.new( express_file );
    server.start();
});

gulp.task('default', ['app-scss', 'vendor-css', 'vendor-js', 'app-js', 'serve'],function() {
    gulp.watch(SOURCE_DIR+'**/*.jsx', ['app-js']);
    gulp.watch(SOURCE_DIR+'**/*.js', ['app-js']);
    gulp.watch(SOURCE_DIR + 'styles/**/*.scss', ['app-scss']);
});