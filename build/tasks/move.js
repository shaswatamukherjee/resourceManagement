const gulp = require('gulp');
const distPath = require('../paths').outputSource;

gulp.task('move', function () {
    let srcPaths = [
        './src/**/*.json',
        './src/**/*.svg',
        './src/**/*.woff',
        './src/**/*.ttf',
        './src/**/*.png',
        './src/**/*.ico',
        './src/**/*.jpg',
        './src/**/*.gif',
        './src/**/*.eot'
    ];

    return gulp.src(srcPaths)
        .pipe(gulp.dest(distPath))
});