'use strict';

describe('Directive: blueprintArrows', function () {
  beforeEach(module('gsUiKsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<blueprint-arrows></blueprint-arrows>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the blueprintArrows directive');
  }));
});
