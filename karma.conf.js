module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        colors: true,
        files: [
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-mocks.js',
            'app/scripts/app/search/search.module.js',
            'app/scripts/main.js',
            'app/scripts/app/**/*.js',
            'test/*.spec.js'
        ],
        preprocessors: {
            'app/scripts/app/**/*.html': ['ng-html2js'],
            'app/scripts/app/**/*.js': ['babel'],
        },
        singleRun: false,
        autoWatch: true,
        captureConsole: false,
    });
};
