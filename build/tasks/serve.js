var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
    browserSync.init(null, {
        open: false,
        port: 9000,
        server: {
            baseDir: 'dist',
            index: 'index.html'
        }
    });
});

gulp.task('local-serve', ['build', 'watch','browser-sync'], (done) => {
    console.log('as');
    done();
});
gulp.task('serve', ['build', 'watch','browser-sync']);