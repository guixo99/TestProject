(function () {
    var fs = require('fs');
    var _ = require('lodash');

    function Converter(csvFileName) {
        var csvString = fs.readFileSync(csvFileName, 'utf-8');
        var lines = csvString.split('\n');
        var data = [];
        var headers = getHeaders(lines);
        lines = _.slice(lines, 1);

        lines.forEach(function(line) {
            var obj = {};
            line = line.replace(/\r?\n|\r/g, '');
            line.split(',').forEach(function (val, index) {
                obj[headers[index]] = val;
            });
            data.push(obj);
        });

        return data;
    }

    function getHeaders(lines) {
        // RegExp: "/\r?\n|\r/g" - Find end line characters and replace by empty string. (Windows compatibility)
        return _.first(lines).replace(/\r?\n|\r/g, '').split(',');
    }

    module.exports = Converter;
}());