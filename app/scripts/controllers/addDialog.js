'use strict';

/**
 * @ngdoc function
 * @name testProjectApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the testProjectApp
 */
angular.module('testProjectApp')
.controller('UserCtrl', function($scope, $mdSidenav,Users,$mdDialog) {

  function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
  }

    $scope.showAdd = function(ev,user) {
      $scope.user=user;
      $mdDialog.show({
          controller: DialogController,
          scope: $scope,
          preserveScope: true,
          clickOutsideToClose: true, 
          templateUrl: '/views/templates/addDialog.html',
          targetEvent: ev,
        });
    };

    $scope.saveUser=function(user){
      Users.addUser(user);
      $scope.hide();
  };

});