(function () {
    function Converter(csvFileName) {
        var fs = require('fs');
        var csvString = fs.readFileSync(csvFileName, 'utf-8');
        var lines = csvString.split('\n');
        var headers = lines.splice(0, 1);
        var data = [];
        headers = headers[0].split(',');
        lines.forEach(function(line) {
            var obj = {};
            line.split(',').forEach(function (val, index) {
                obj[headers[index]] = val;
            });
            data.push(obj);
        });

        return data;
    }

    module.exports = Converter;
}());