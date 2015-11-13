'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var express = require('gulp-express');

function runServer (port, env, livereload) {
    process.env.port = port || '3000',
    process.env.NODE_ENV = env || 'development';
    express.run([path.join(conf.paths.server)], {
        env: process.env
    }, livereload);
}

gulp.task('serve', ['watch'], function () {
    runServer();
});

gulp.task('serve:dist', ['build'], function () {
    runServer('3000', 'dist');
});

gulp.task('serve:e2e', ['inject'], function () {
    runServer('3333', null, false);
});

gulp.task('serve:e2e-dist', ['build'], function () {
    runServer('3333', null, false);
});
