var gulp = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = function() {
    browserSync.init({
        server: "./public"
    });

	gulp.watch("./public/*.html").on('change', browserSync.reload);
    gulp.watch("./public/styles/*.css").on('change', browserSync.reload);
    gulp.watch("./public/scripts/*.js").on('change', browserSync.reload);
};