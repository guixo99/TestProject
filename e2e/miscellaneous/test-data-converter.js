(function () {
    return function (jobreference) {
        var Converter=require("csvtojson").Converter;
        var fs=require("fs");
        var csvFileName="TESTJOB.csv";
        var fileStream=fs.createReadStream(csvFileName);

        //new converter instance
        var param={};
        var csvConverter=new Converter(param);
        var d = protractor.promise.defer();
        csvConverter.on("end_parsed",function(jsonObj){
            console.log(jsonObj);
        });
        //d.reject("fail!!!!");
        fileStream.pipe(csvConverter);
        return d.promise;
    }
}());