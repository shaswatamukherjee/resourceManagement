module.exports = {
    vendor: {
        js: [
            'node_modules/systemjs/dist/system.src.js',
            'jspm_packages/github/angular/bower-angular@1.6.8/angular.js',
            'node_modules/angular-ui-router/release/angular-ui-router.js',
            'node_modules/systemjs-plugin-babel/plugin-babel.js',
            'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
        ]
    },
    app: {
        templates: [
            'src/**/*.html',
            'index.html'
        ],
        scripts: [
            'src/**/*.js',
            'systemjs.config.js'
        ],
        css: [
            'node_modules/bootstrap-css-only/css/bootstrap.css'
        ]
    },
    css: ['src/**/*.css'],
    less: ['src/**/*.less'],
    sass: ['src/**/*.scss'],
    outputSource: 'dist/',
    outputVendor: 'dist/vendor/',
    outputCss: 'dist/styles/'
};