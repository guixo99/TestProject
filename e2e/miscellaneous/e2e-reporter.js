(function () {
    var _ = require('lodash');
    var fs = require('fs');

    var errors = 0;
    var template = fs.readFileSync('e2e/miscellaneous/templateReport.html', 'utf-8');
    var report = _.template(template);

    module.exports = function(baseUrlOut, filename) {
        var fs = require('fs');
        var path = require('path');
        var outFile = path.resolve(baseUrlOut, filename + ' - ' + (new Date()).toLocaleString().slice(0, 24).replace(/:/g,"-") + '.html');
        var data = {};
        var currentSuite;
        var currentSpec;

        this.jasmineStarted = function(suiteInfo) {
            data.totalSpecs = suiteInfo.totalSpecsDefined;
            data.suites = [];
        };

        this.suiteStarted = function(result) {
            if (!errors) {
                currentSuite = {};
                currentSuite.description = result.description;
                currentSuite.fullName = result.fullName;
                currentSuite.specs = [];
            }
        };

        this.specStarted = function(result) {
            if (!errors) {
                currentSpec = {};
                currentSpec.description = result.description;
            }
        };

        this.specDone = function(result) {
            if (!errors) {
                currentSpec.status = result.status;
                currentSpec.failedExpectations = result.failedExpectations;

                if (result.failedExpectations.length) {
                    browser.takeScreenshot().then(function (img) {
                        currentSpec.screenshoot = img;
                    });
                    currentSpec.info = jasmine.testData[Math.floor(parseInt(result.id.substr(result.id.length-1, 1)) / (data.totalSpecs / jasmine.testData.length))];
                    errors++;
                }
                currentSuite.specs.push(currentSpec);
            }
        };

        this.suiteDone = function(result) {
            currentSuite.status = result.status;
            data.suites.push(currentSuite);
        };

        this.jasmineDone = function() {
            fs.writeFileSync(outFile, report(data));
        };
    };
}());