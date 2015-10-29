'use strict';

/**
 * @ngdoc service
 * @name testProjectApp.dataResponsive
 * @description
 * # dataResponsive
 * Factory in the testProjectApp.
 */
angular.module('testProjectApp')
  .factory('dataResponsive', function ($q) {
  var deferred = $q.defer();

  var dataResponsive = [{
                    "id": 0,
                    "name": "Favi",
                    "surname": "Narvaez",
                    "age": 32,
                    "address": "Samuel Ramos 67",
                    "phone": "1234567890"
                }, {
                    "id": 1,
                    "name": "Pablo",
                    "surname": "Dominguez",
                    "age": 32,
                    "address": "Prado Churubusco 30",
                    "phone": "1234567890"
                }, {
                    "id": 2,
                    "name": "Manuel",
                    "surname": "Lopez",
                    "age": 32,
                    "address": "Sur 67",
                    "phone": "1234567890"
                }, {
                    "id": 3,
                    "name": "Kena",
                    "surname": "Caballero",
                    "age": 32,
                    "address": "Sonora 67",
                    "phone": "1234567890"
                }, {
                    "id": 4,
                    "name": "Fabio",
                    "surname": "Guerra",
                    "age": 32,
                    "address": "Heriberto Frias 48",
                    "phone": "1234567890"
                }]


    var getData = function() {
      deferred.resolve(dataResponsive);
      return deferred.promise;
    };

    return {
      getData: getData
    };
  });
