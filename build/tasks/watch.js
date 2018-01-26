var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

function changed(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', () => {
    gulp.watch( paths.app.scripts , [ 'compile-js', browserSync.reload ]).on('change', changed);
    gulp.watch( paths.app.templates , [ 'compile-html', browserSync.reload ]).on('change', changed);
});