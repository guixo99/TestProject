(function() {
'use strict';  
/**
 * @ngdoc function
 * @name testProjectApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the testProjectApp
 */
angular.module('testProjectApp')
	.controller('ListCtrl', ['$scope', 'entries', function ($scope, entries) {
		console.log(entries);
        $scope.listEntries = entries;
  }]);
 })();