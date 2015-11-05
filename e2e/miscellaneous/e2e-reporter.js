(function () {
    module.exports = function(baseUrlOut, filename) {
        var fs = require('fs');
        var path = require('path');

        this.outFile = path.resolve(baseUrlOut, filename + ' - ' + browser.browserName + '.html');

        this.jasmineStarted = function(suiteInfo) {
            fs.writeFileSync(this.outFile, '<html><head><meta charset="utf-8"></head><body>');

            var msg = '<h1>Running suite with ' + suiteInfo.totalSpecsDefined + '</h1>';

            fs.appendFile(this.outFile, msg);
        };

        this.suiteStarted = function(result) {
            var msg = '<h2>Suite started: ' + result.description + ' whose full description is: ' + result.fullName + '</h2>';

            fs.appendFile(this.outFile, msg);
        };

        this.specStarted = function(result) {
            var msg = '<h3>Spec started: ' + result.description + ' whose full description is: ' + result.fullName + '</h3>';

            fs.appendFile(this.outFile, msg);
        };

        this.specDone = function(result) {
            var msg = '<p>Spec: ' + result.description + ' was ' + result.status + '</p>';
            var that;

            fs.appendFile(this.outFile, msg);
            for(var i = 0; i < result.failedExpectations.length; i++) {
                msg = '<p>Failure: ' + result.failedExpectations[i].message + '\n' + result.failedExpectations[i].stack + '</p>';
                fs.appendFile(this.outFile, msg);
                that = this;
                browser.takeScreenshot().then(function (img) {
                    fs.appendFile(that.outFile, '<img src="data:image/png;base64,' + img + '">');
                });
                console.log(jasmine.testData[Math.floor(parseInt(result.id.substr(result.id.length-1, 1)) / 2)]);
            }
        };

        this.suiteDone = function(result) {
            var msg = '<p>Suite: ' + result.description + ' was ' + result.status + '</p>';
            var that;

            fs.appendFile(this.outFile, msg);
            for(var i = 0; i < result.failedExpectations.length; i++) {
                msg = '<p>AfterAll ' + result.failedExpectations[i].message + '\n' + result.failedExpectations[i].stack + '</p>';
                fs.appendFile(this.outFile, msg);
                img = browser.takeScreenshot();
                that = this;
                browser.takeScreenshot().then(function (img) {
                    fs.appendFile(that.outFile, '<img src="data:image/png;base64,' + img + '">');
                });
            }
        };

        this.jasmineDone = function() {
            var msg = '<h1>Finished suite</h1>';

            fs.appendFile(this.outFile, msg);
            fs.appendFile(this.outFile, '</body></html>');
        };
    };
}());