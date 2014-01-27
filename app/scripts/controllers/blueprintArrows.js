'use strict';

angular.module('gsUiKsApp')
    .controller('BlueprintarrowsCtrl', function ($scope, blueprintCoordinateService) {

        $scope.count = 4;

        function randomCircles() {
            $scope.circles = [];
            for (var i = 0; i < $scope.count; i++) {
                $scope.circles.push({
                    top: (Math.random() * 450) + "px",
                    left: (Math.random() * 450) + "px"
                });
            }
            blueprintCoordinateService.draw();
        }

        $scope.Shuffle = function () {
            $scope.circles.forEach(function (o, i) {
                $scope.circles[i] = {
                    top: (Math.random() * 450) + "px",
                    left: (Math.random() * 450) + "px"
                };
            });
            blueprintCoordinateService.draw();
        }

        function randomMap() {
            $scope.map = []
            for (var i = 0; i < $scope.count; i++) {
                $scope.map.push(randomNumbers());
            }
            blueprintCoordinateService.setMap($scope.map);
        }

        function randomNumbers() {
            var source = Math.round(Math.random() * $scope.count),
                target = false;

            setTarget();
            function setTarget() {
                target = Math.round(Math.random() * $scope.count);
                if(source == target)
                    setTarget();
            }
            return {
                "source": source,
                "target": target
            }
        }

        $scope.coordinates = blueprintCoordinateService.getCoordinates();

        $scope.$watch("count", function () {
            randomCircles();
            randomMap();
        });


        $scope.tabs = [
            // TODO is there a better way to get source code (perhaps $http or $resource)?
            {
                title: $scope.tabsMeta.html.title,
                content: '<ANY blueprint:arrows="{array}" color="{string}" arrow="{bool}" storke="{number}">... </ANY>'
            }
        ];

        var jsTabDisplay = false;
        $scope.$watch("coordinates", function(coordinates){
            if(coordinates.length > 0 && !jsTabDisplay) {
                $scope.tabs.push({
                    title: $scope.tabsMeta.javascript.title,
                    content: '$scope.coordinates = ' + JSON.stringify(coordinates, $scope.themeReplacer, 2)
                });
                jsTabDisplay = true;
            }
        }, true)


        $scope.dropend = function( item ) {
            blueprintCoordinateService.draw();
        }

    });