'use strict';

(function() {
/**
 * @ngdoc function
 * @name testProjectApp.controller:addEntryCtrl
 * @description
 * # addEntryCtrl
 * Controller of the testProjectApp
 */
angular.module('testProjectApp')
  .controller('addEntryCtrl', ['$scope','$state','blogEntries',function ($scope,$state,blogEntries) {
    $scope.saveEntry= function(entry){
      blogEntries.addEntry(entry);
      $state.go('list', {'newEntry' : entry});
    };
  }]);
})();