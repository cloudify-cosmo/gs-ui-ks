'use strict';

describe('Directive: codeblock', function () {
  beforeEach(module('gsUiKsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
      $rootScope.mySrc = "this is the codeblock directive";
    element = angular.element('<div codeblock source="mySrc"></div>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the codeblock directive');
  }));
});
