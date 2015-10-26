'use strict';

describe('Controller: ContactListCtrl', function () {

  // load the controller's module
  beforeEach(module('testProjectApp'));

  var ContactlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactlistCtrl = $controller('ContactlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
