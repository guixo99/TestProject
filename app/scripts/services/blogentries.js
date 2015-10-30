'use strict';

/**
 * @ngdoc service
 * @name testProjectApp.blogEntries
 * @description
 * # blogEntries
 * Factory in the testProjectApp.
 */

 angular.module('testProjectApp')
 .factory('blogEntries', ['$http',function ($http) {
    // Public API here
    var entries=[];
    var myService = {
     getData: function() {
       var promise = $http.get('../data/data.json').then(function (response) {
        if(entries.length===0){
          entries=response.data;
        }
        return entries;
      });
       return promise;
     },
     addEntry: function(entry){
      entries.push(entry);
    }
  };
  return myService;    
}]);
