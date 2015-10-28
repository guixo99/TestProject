'use strict';

/**
 * @ngdoc directive
 * @name testProjectApp.directive:BlogEntry
 * @description
 * # BlogEntry
 */
angular.module('testProjectApp')
  .directive('blogEntry', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/blog-entry.html',
      scope: {
        id: "@",
        name: "@",
        date: "=",
        text: "@",
        user: "@"
      }
    };
  });