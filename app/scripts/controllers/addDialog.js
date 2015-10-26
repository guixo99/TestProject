'use strict';

/**
 * @ngdoc function
 * @name testProjectApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the testProjectApp
 */
angular.module('testProjectApp')
.controller('UserCtrl', function($scope, Users,$mdDialog) {

  $scope.user =Users.getCurrentUser();

  function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
  }

    $scope.showAdd = function(ev,index) {
      Users.setCurrentUser(index);
      $mdDialog.show({
          controller: DialogController,
          clickOutsideToClose: true, 
          templateUrl: '/views/templates/addDialog.html',
          targetEvent: ev,
        });
    };

    $scope.saveUser=function(user){
      if(user.index){
        Users.updateUser();
      }else{
        Users.addUser(user);
      }
      $scope.hide();
  };

});