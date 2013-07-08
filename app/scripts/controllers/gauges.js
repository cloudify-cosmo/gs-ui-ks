'use strict';

angular.module('gsUiKsApp')
    .controller('GaugesCtrl', function ($scope) {

        // only one gauge at the moment
        $scope.gauge = {
            sensitivity: 18,
            val: 20,
            themes: {
                fire: {
                    // TODO
                    // gauge should be more lenient:
                    // if only one color is provided (string / single arg array),
                    // it should be applied throughout the colors array
                    background: ['lightyellow', 'lightyellow'],
                    basis: ['orange', 'red'],
                    tick: 'red',
                    dial: ['orange', 'orange', 'orange', 'orange', 'orange'],
                    pointer: ['red', 'orange', 'lightyellow'],
                    border: 'orange'
                },
                grayscale: {
                    background: ['white', 'white'],
                    basis: ['#fff', '#aaa'],
                    tick: 'black',
                    dial: ['white', 'white', 'white', 'white', 'white'],
                    pointer: ['lightgray', 'gray', 'gray'],
                    border: 'white'
                },
                sky: {
                    background: ['#edf7fc', '#edf7fc'],
                    basis: ['#6098bf', '#5086ab'],
                    tick: '#0a66a3',
                    dial: ['lightblue', 'lightblue', 'lightblue', '#6098bf', '#6098bf'],
                    pointer: ['#007cbf', '#6098bf', '#edf7fc'],
                    border: '#007cbf'
                }
            }
        };

        $scope.themeReplacer = function(k, v) {
            if (k === 'fire' || k === 'grayscale') return undefined;
            return v;
        };

        $scope.tabs = [
            // TODO is there a better way to do this?
            { title: 'Markup', content: '<gs-gauge sensitivity="gauge.sensitivity" val="gauge.val" colors="gauge.themes.sky"></gs-gauge>' },
            // TODO is there a better way to do this?
            { title: 'JavaScript', content: '$scope.gauge = ' + JSON.stringify($scope.gauge, $scope.themeReplacer, 2) }
        ];

    });
