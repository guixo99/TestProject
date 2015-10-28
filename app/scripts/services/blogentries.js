'use strict';

/**
 * @ngdoc service
 * @name testProjectApp.blogEntries
 * @description
 * # blogEntries
 * Factory in the testProjectApp.
 */
angular.module('testProjectApp')
  .factory('blogEntries', function () {
    
    var entries=[];

    // Public API here
    return {
      getEntries: function(){
        return entries;
      },
      addEntry: function(entry){
        entries.push(entry);
      }
    };
  });
