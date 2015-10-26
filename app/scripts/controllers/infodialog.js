'use strict';

/**
 * @ngdoc function
 * @name testProjectApp.controller:InfoDialogCtrl
 * @description
 * # InfoDialogCtrl
 * Controller of the testProjectApp
 */
angular.module('testProjectApp')
  .controller('InfoDialogCtrl', function ($scope, $mdDialog, info) {
      $scope.info = info;

      $scope.close = function () {
        $mdDialog.hide();
      };
  });
