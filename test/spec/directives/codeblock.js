'use strict';

describe('Directive: codeblock', function () {
  beforeEach(module('gsUiKsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<div codeblock></div>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the codeblock directive');
  }));
});
