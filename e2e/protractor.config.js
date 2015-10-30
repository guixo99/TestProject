exports.config = {

    firefoxPath: '/opt/firefox/firefox',

    // Spec patterns are relative to the location of this config.
    specs: [
        'spec/*.js'
    ],

    multiCapabilities: [{
        'browserName': 'firefox'
    }, {
        'browserName': 'chrome'
    }],

    maxSessions: 1,

    // ---------------------------------------------------------------------------
    // ----- Global test information ---------------------------------------------
    // ---------------------------------------------------------------------------
    //
    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: 'http://localhost:9876/#/',

    onPrepare: function() {
        // At this point, global variable 'protractor' object will be set up, and
        // globals from the test framework will be available. For example, if you
        // are using Jasmine, you can add a reporter with:
        //     jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
        //         'outputdir/', true, true));
        //
        // If you need access back to the current configuration object,
        // use a pattern like the following:
        //     browser.getProcessedConfig().then(function(config) {
        //       // config.capabilities is the CURRENT capability being run, if
        //       // you are using multiCapabilities.
        //       console.log('Executing capability', config.capabilities);
        //     });
    },

    framework: 'jasmine2',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};