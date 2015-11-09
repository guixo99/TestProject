(function () {
    function Converter(csvFileName) {
        var fs = require('fs');
        var csvString = fs.readFileSync(csvFileName, 'utf-8');
        var lines = csvString.split('\n');
        var headers = lines.splice(0, 1);
        var data = [];
        headers = headers[0].replace(/\r?\n|\r/g, '');
        headers = headers.split(',');
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

    module.exports = Converter;
}());