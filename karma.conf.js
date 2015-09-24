// Karma configuration
// Generated on Tue Sep 22 2015 08:48:01 GMT+0530 (India Standard Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
             "libraries/jquery/js/jquery-2.1.1.js",
            "libraries/angular/js/angular.min.js",
            "libraries/angular/js/angular-mocks.js",
                    "libraries/angular/js/angular-route.js",
            "libraries/angular/js/angular-sanitize.min.js",
            "libraries/angular/js/ui-bootstrap-tpls-0.11.0.min.js",
            "libraries/bootstrap/js/bootstrap.min.js",
            "js/app.js",
            "js/controllers/*.js",
            "js/filters/*.js",
            "js/services/*.js",
            "tests/**/*.js"
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "js/**/*.js" : ['coverage']
        },

        coverageReporter : {
            type: 'html',
            dir:'coverage/'
        },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}
