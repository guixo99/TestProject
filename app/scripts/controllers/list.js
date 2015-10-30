'use strict';

/**
 * @ngdoc function
 * @name testProjectApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the testProjectApp
 */
angular.module('testProjectApp')
	.controller('ListCtrl', ['$scope', 'listEntries', 'blogEntries', function ($scope, listEntries,blogEntries) {
    $scope.listEntries = blogEntries.getEntries();
  }]);
 