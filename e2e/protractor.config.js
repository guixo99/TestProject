(function (){
    var path = require('path');
    var os = require('os');
    var cwd = __dirname;

    // The path of firefox would be different. In this case must manually indicated
    var foxPath = os.platform() === 'win32' ? null : '/opt/firefox/firefox';

    exports.config = {
        firefoxPath: foxPath,

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