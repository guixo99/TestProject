(function() {
'use strict';
/**
 * @ngdoc function
 * @name testProjectApp.controller:ContactlistCtrl
 * @description
 * # ContactlistCtrl
 * Controller of the testProjectApp
 */
angular.module('testProjectApp')
  .controller('ContactListCtrl', function ($scope, Users, $mdSidenav, $mdDialog) {
    $scope.users = Users.getUsers();
    $scope.usersCount = Users.getUsersCount();

    $scope.openDialogInfo = function ($event, user) {
      $mdSidenav('left').close();
      $mdDialog.show({
        parent: angular.element(document.body),
        clickOutsideToClose: true,
        templateUrl:'/views/templates/infodialog.html',
        targetEvent: $event,
        locals: {
          info: user
        },
        controller: function($scope, $mdDialog, info) {
          $scope.info = info;

          $scope.close = function () {
            $mdDialog.hide();
          };
        }
      });
    };
  });
})();