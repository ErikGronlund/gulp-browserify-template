'use strict';

var gulp = require('gulp');

var paths = require('../paths');

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch(paths.src.client.images, ['client']);
    gulp.watch(paths.src.client.less, ['client']);
    gulp.watch(paths.src.client.html, ['client']);
    gulp.watch(paths.src.client.js, ['unit-client', 'client']);
});