'use strict';

/**
 * @ngdoc service
 * @name testProjectApp.dataResponsive
 * @description
 * # dataResponsive
 * Factory in the testProjectApp.
 */
angular.module('testProjectApp')
  .factory('dataResponsive', function ($http, $log) {

       var elements = {};

       var myService = {
         getData: function() {
           var promise = $http.get('../data/dataResponsive.json').then(function (response) {
             return response.data;
           });
           return promise;
         },
         getDatas: function(page, limit){
          var n = (page-1)*limit,
              rs = [];

          var promise = $http.get('../data/dataResponsive.json').then(function (response) {
            angular.forEach(response.data, function (element, index) {
                if( index >= n)
                  rs.push(element);
            });
            return rs;
          });
          return promise;
         }
       };

       return myService;
  });
