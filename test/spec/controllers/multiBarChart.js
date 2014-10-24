'use strict';

describe('Controller: MultibarchartCtrl', function () {

    // load the controller's module
    beforeEach(module('gsUiKsApp'));

    var MultibarchartCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MultibarchartCtrl = $controller('MultibarchartCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});
