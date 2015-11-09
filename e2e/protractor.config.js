(function (){
    var path = require('path');
    var cwd = __dirname;

    exports.config = {

        // In windows this property isn't necessary, so can be commented
        firefoxPath: '/opt/firefox/firefox',

        //In windows this property must be set whit the path of the IEDriver downloaded manually or by the webdriver-manager
        seleniumArgs: ['-Dwebdriver.ie.driver=' + path.resolve('', '../node_modules/protractor/selenium/IEDriverServer.exe')],

        // Spec patterns are relative to the location of this config.
        specs: [
            'spec/*.js'
        ],

        multiCapabilities: [{
                'browserName': 'firefox'
            }
        ],

        maxSessions: 1,

        // ---------------------------------------------------------------------------
        // ----- Global test information ---------------------------------------------
        // ---------------------------------------------------------------------------
        //
        // A base URL for your application under test. Calls to protractor.get()
        // with relative paths will be prepended with this.
        baseUrl: 'http://localhost:9000/',

        params: {
            filesTest: path.resolve('', cwd, 'testfiles/') + path.sep
        },

        onPrepare: function() {
            'use strict';

            var baseUrl = path.resolve('', cwd, 'reports') + path.sep;
            var nameReport = 'userCreation';

            jasmine.testData = [];

            require('jasmine-reporters');
            var Reporter = require(path.resolve('', cwd, 'miscellaneous/e2e-reporter.js'));
            jasmine.getEnv().addReporter(new Reporter(baseUrl, nameReport));
        },

        framework: 'jasmine2',

        jasmineNodeOpts: {
            defaultTimeoutInterval: 30000
        }
    };
}());