'use strict';

describe('Controller: BlueprintarrowsCtrl', function () {

  // load the controller's module
  beforeEach(module('gsUiKsApp'));

  var BlueprintarrowsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlueprintarrowsCtrl = $controller('BlueprintarrowsCtrl', {
      $scope: scope
    });
  }));

//  it('should attach a list of awesomeThings to the scope', function () {
//    expect(scope.awesomeThings.length).toBe(3);
//  });
});
