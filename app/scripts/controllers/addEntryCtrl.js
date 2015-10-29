'use strict';

/**
 * @ngdoc function
 * @name testProjectApp.controller:addEntryCtrl
 * @description
 * # addEntryCtrl
 * Controller of the testProjectApp
 */
angular.module('testProjectApp')
  .controller('addEntryCtrl', function ($scope,$state) {
    $scope.entry={};
    $scope.entries=[];
    $scope.saveEntry= function(entry){
      $state.go('list', {'newEntry' : entry});
      $scope.entries.push(entry);
      $scope.entry={};

    };
  });
