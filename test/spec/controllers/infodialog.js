'use strict';

describe('Controller: InfoDialogCtrl', function () {

  // load the controller's module
  beforeEach(module('testProjectApp'));

  var InfoDialogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InfoDialogCtrl = $controller('InfoDialogCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
