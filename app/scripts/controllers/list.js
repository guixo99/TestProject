'use strict';

/**
 * @ngdoc function
 * @name testProjectApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the testProjectApp
 */
angular.module('testProjectApp')
	.controller('ListCtrl', ['$scope', 'listEntries', 'newEntry', 'blogEntries', function ($scope, listEntries,newEntry,blogEntries) {
    var listEntries_ = listEntries.data;
    if(newEntry){
  		blogEntries.addEntry(newEntry);
  		newEntry={};
  	}
  	if(blogEntries.getEntries().length===0){
    	listEntries_.forEach(function (entry) {
    		entry.date = new Date(entry.date);
			blogEntries.addEntry(entry);
    	});
    }
    $scope.listEntries = blogEntries.getEntries();
  }]);
 