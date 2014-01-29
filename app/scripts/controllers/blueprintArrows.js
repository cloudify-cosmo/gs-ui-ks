'use strict';

angular.module('gsUiKsApp')
    .controller('BlueprintarrowsCtrl', ['$scope', 'blueprintCoordinateService', 'gs.config', function ($scope, blueprintCoordinateService, gsConfig) {

        $scope.count = 4;

        function randomCircles() {
            $scope.circles = [];
            for (var i = 0; i < $scope.count; i++) {
                $scope.circles.push({
                    top: (Math.random() * 450) + 'px',
                    left: (Math.random() * 450) + 'px'
                });
            }
            blueprintCoordinateService.draw();
        }

        $scope.Shuffle = function () {
            $scope.circles.forEach(function (o, i) {
                $scope.circles[i] = {
                    top: (Math.random() * 450) + 'px',
                    left: (Math.random() * 450) + 'px'
                };
            });
            blueprintCoordinateService.draw();
        };

        function randomMap() {
            $scope.map = [];
            for (var i = 0; i < $scope.count; i++) {
                $scope.map.push(randomNumbers());
            }
            blueprintCoordinateService.setMap($scope.map);
        }

        function randomNumbers() {
            var source = Math.round(Math.random() * $scope.count),
                target = false;

            function setTarget() {
                target = Math.round(Math.random() * $scope.count);
                if (source === target) {
                    setTarget();
                }
            }

            setTarget();

            return {
                source: source,
                target: target
            };
        }

        $scope.coordinates = blueprintCoordinateService.getCoordinates();

        $scope.$watch('count', function () {
            randomCircles();
            randomMap();
        });


        $scope.tabs = [
            // TODO is there a better way to get source code (perhaps $http or $resource)?
            {
                title: $scope.tabsMeta.view.title,
                content: '&lt;ANY blueprint:arrows=&quot;{array}&quot; color=&quot;{string}&quot; arrow=&quot;{bool}&quot; storke=&quot;{number}&quot;&gt;... &lt;/ANY&gt;'
            }
        ];

        var jsTabDisplay = false;
        $scope.$watch('coordinates', function(coordinates){
            if(coordinates.length > 0 && !jsTabDisplay) {
                $scope.tabs.push({
                    title: $scope.tabsMeta.controller.title,
                    content: '$scope.coordinates = ' + JSON.stringify(coordinates, $scope.themeReplacer, 2)
                });
                jsTabDisplay = true;
            }
        }, true);


        $scope.dropend = function() {
            blueprintCoordinateService.draw();
        };

    });