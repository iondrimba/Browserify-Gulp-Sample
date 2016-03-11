'use strict';
var gulp = require('gulp');

// using vinyl-source-stream: 
gulp.task('browserify', require('./tasks/browserify.js'));

//eslint task
gulp.task('lint', require('./tasks/eslint.js'));

//scss lint task
gulp.task('scsslint', require('./tasks/scss-lint.js'));

//uglify task
gulp.task('uglify', require('./tasks/uglify.js'));

//imagemmin task
gulp.task('imagemin', require('./tasks/imagemin.js'));

//sass - scss task
gulp.task('sass', require('./tasks/sass.js'));

//watch js scss files
gulp.task('watch', require('./tasks/watch.js'));

//browser sync
gulp.task('browser-sync', require('./tasks/browser-sync.js'));

// Default Task
gulp.task('default', ['sass', 'scsslint', 'lint', 'browserify', 'browser-sync', 'watch']);

//TRAVIS
gulp.task('travis', ['browserify', 'lint', 'scsslint', 'sass', 'imagemin', 'uglify']);