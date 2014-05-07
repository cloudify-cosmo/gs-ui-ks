'use strict';

angular.module('gsUiKsApp')
    .controller('BarchartsCtrl', function ($scope, $timeout) {

        $scope.data = [
            {key: 'Bar Chart Example', values: [
                ['A', -129.765957771107 ],
                ['B' , 80 ],
                ['C' , 180.807804682612 ],
                ['D' , 296.45946739256 ],
                ['E' , 240 ],
                ['F' , 150 ],
                ['G' , 400 ],
                ['H' , 100 ],
                ['I' , 20 ]
            ]}
        ];

        $scope.colors = ['#B00040', '#cce80b', '#feb300', '#46b8da'];

        $scope.removeData = function(dataRow){
            $scope.data[0].values.splice($scope.data[0].values.indexOf(dataRow), 1);
        };

        $scope.addData = function() {
            if($scope.dataLabel !== '' && $scope.dataValue !== '') {
                $scope.data[0].values.push([$scope.dataLabel, $scope.dataValue]);
                $scope.dataLabel = '';
                $scope.dataValue = '';
            }
        };

        $scope.removeColor = function(color) {
            $scope.colors.splice($scope.colors.indexOf(color), 1);
            refreshChart();
        };

        $scope.addColor = function() {
            if($scope.color !== '') {
                $scope.colors.push($scope.color);
                refreshChart();
                $scope.color = '';
            }
        };

        $scope.$on('elementClick.directive', function(angularEvent, event){
            $scope.messege = 'Click on '+event.point[0]+' with value of '+event.point[1];
        });

        function refreshChart() {
            var emptyRow = ['', 0];
            $scope.data[0].values.push(emptyRow);
            $timeout(function(){
                $scope.removeData(emptyRow);
            }, 0);
        }

    });
