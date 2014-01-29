'use strict';

describe('Controller: PieprogressCtrl', function () {

  // load the controller's module
  beforeEach(module('gsUiKsApp'));

  var PieprogressCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PieprogressCtrl = $controller('PieprogressCtrl', {
      $scope: scope
    });
  }));

//  it('should attach a list of awesomeThings to the scope', function () {
//    expect(scope.awesomeThings.length).toBe(3);
//  });
});
