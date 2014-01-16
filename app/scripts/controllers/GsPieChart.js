'use strict';

angular.module('gsUiKsApp')
    .controller('GsPieChartCtrl', function ($scope) {
        var randomData = function (size) {
            return d3.range(size).map(function (/*d*/) {
                return Math.ceil(Math.random() * 50);
            });
        };
        $scope.count = 5;
        $scope.chartData = randomData($scope.count);
        $scope.changeData = function () {
            $scope.chartData = randomData($scope.count);
        };
    });
