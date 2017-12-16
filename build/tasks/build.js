const gulp = require('gulp');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const sourceMaps = require('gulp-sourcemaps');
const less = require('gulp-less');
const sass = require('gulp-sass');
const lessPluginCleanCSS = require("less-plugin-clean-css");
const runSequence = require('run-sequence');
const browserSync = require('browser-sync');
const ifElse = require('gulp-if-else');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const merge = require('merge-stream');

var liveEnv = false;

const paths = require('../paths');
const babelOptions = require('../babelOptions');

const cleancss = new lessPluginCleanCSS({
    advanced: true,
    keepSpecialComments: 0,
    keepBreaks: false
});

gulp.task('build', (callback) => {
    return runSequence(
        'clean',
        ['compile-js', 'compile-html', 'compile-style', 'move'],
        callback
    );
});

gulp.task('compile-js', () => {
    return gulp.src(paths.scripts, {base: 'src'})
        .pipe(plumber())
        .pipe(changed(paths.outputSource, { extension: '.js' }))
        .pipe(babel(babelOptions))
        .pipe(ifElse(liveEnv, uglify))
        .pipe(gulp.dest(paths.outputSource))
});

gulp.task('compile-html', () => {
    return gulp.src(paths.html)
        .pipe(plumber())
        .pipe(changed(paths.outputSource, { extension: '.html' }))
        .pipe(babel(babelOptions))
        .pipe(gulp.dest(paths.outputSource))
});

gulp.task('compile-style', () => {
    let lessStream = gulp.src(paths.less)
        .pipe(less({
            plugins: [ cleancss ]
        }))
        .pipe(concat('concated-styles.less'));

    let sassStream = gulp.src(paths.sass)
        .pipe(sass())
        .pipe(concat('concated-styles.sass'));

    let cssStream = gulp.src(paths.css)
        .pipe(concat('concated-styles.css'));

    let mergedCssStream = merge(lessStream, sassStream, cssStream)
        .pipe(plumber())
        .pipe(changed(paths.outputCss, { extension: '.css' }))
        .pipe(babel(babelOptions))
        .pipe(concat('styles.css'))
        .pipe(ifElse(liveEnv, uglify))
        .pipe(gulp.dest(paths.outputCss))
        .pipe(browserSync.reload({ stream: true }));

    return mergedCssStream;
});

