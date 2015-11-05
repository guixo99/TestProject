(function () {
    var errors = 0;

    module.exports = function(baseUrlOut, filename) {
        var fs = require('fs');
        var path = require('path');

        this.outFile = path.resolve(baseUrlOut, filename + ' - ' + (new Date()).toLocaleString() + '.html');
        this.totalSpecs = 0;

        this.jasmineStarted = function(suiteInfo) {
            var msg = '<h1>Running suite with ' + suiteInfo.totalSpecsDefined + '</h1>';

            this.totalSpecs = suiteInfo.totalSpecsDefined;
            fs.appendFile(this.outFile, '<html><head><meta charset="utf-8"></head><body>');
            fs.appendFile(this.outFile, msg);
        };

        this.suiteStarted = function(result) {
            if (!errors) {
                var msg = '<h2>Suite started: ' + result.description + ' whose full description is: ' + result.fullName + '</h2>';

                fs.appendFile(this.outFile, msg);
            }
        };

        this.specStarted = function(result) {
            if (!errors) {
                var msg = '<h3>Spec started: ' + result.description + '</h3>';

                fs.appendFile(this.outFile, msg);
            }
        };

        this.specDone = function(result) {
            if (!errors) {
                var msg = '<p>Spec was ' + result.status + '</p>';
                var that;
                var failures = result.failedExpectations.length;

                fs.appendFile(this.outFile, msg);
                for(var i = 0; i < failures; i++) {
                    msg = '<p>Failure: ' + result.failedExpectations[i].message + '</p>';
                    fs.appendFile(this.outFile, msg);
                }

                if (failures) {
                    that = this;
                    browser.takeScreenshot().then(function (img) {
                        fs.appendFile(that.outFile, '<img src="data:image/png;base64,' + img + '">');
                    });
                    msg = '<p> Test data: <br/></p>';
                    msg += expandObject(jasmine.testData[Math.floor(parseInt(result.id.substr(result.id.length-1, 1)) / (this.totalSpecs / jasmine.testData.length))]);
                    fs.appendFile(this.outFile, msg);
                    errors++;
                }
            }
        };

        this.suiteDone = function(result) {
            var msg = '<p>Suite was ' + result.status + '</p>';

            fs.appendFile(this.outFile, msg);
        };

        this.jasmineDone = function() {
            var msg = '<h1>Finished suite</h1>';

            fs.appendFile(this.outFile, msg);
            fs.appendFile(this.outFile, '</body></html>');
        };

        function expandObject(obj) {
            var msg = '<p>';
            var objectKeys = Object.keys(obj);

            objectKeys.forEach(function(key) {
                msg += key + ': ' + obj[key] + '<br/>';
            });
            msg += '</p>';

            return msg;
        }
    };
}());