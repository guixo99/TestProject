'use strict';

/**
 * @ngdoc function
 * @name testProjectApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the testProjectApp
 */
angular.module('testProjectApp')
  .controller('ListCtrl', ['$scope', 'listEntries', function ($scope, listEntries) {
    var listEntries = listEntries.data;
    listEntries.forEach(function (entry) {
      entry.date = new Date(entry.date);
    });
    $scope.listEntries = listEntries;
  }]);
