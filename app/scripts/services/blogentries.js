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
    /*var entries=[];
    var promise = $http.get("data/data.json").success(function(response){
      response.forEach(function (entry) {
        entry.date = new Date(entry.date);
        entries.push(entry);
      });
    }); 
      
    var blogEntries=
    {
      fill : function(){
        return promise;
      },
      getEntries: function(){
        return entries;
      },
      addEntry: function(entry){
        entries.push(entry);
      }
    };
    // Public API here
    return  blogEntries;*/

    return {
      promise : function(){
        return $http.get("data/data.json");
      }
    };
  }]);
