'use strict';

angular.module('gsUiKsApp', ['ngRoute', 'ui.codemirror', 'ui.bootstrap', 'gsUiInfraApp', 'nvd3ChartDirectives'])
    .config(function ($routeProvider/*, $locationProvider*/) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .factory('rainbow', function () {
        return {
            highlight: function (e) {
                // see: http://craig.is/making/rainbows/
                window.Rainbow.color(e);
            }
        };
    })
    .value('gs.config', {
        // TODO consider moving this to constants
        codeblock: {
            language: {
                html: 'html',
                css: 'css',
                javascript: 'javascript'
            }
        },
        codemirror: {
            lineWrapping: false,
            lineNumbers: true,
            mode: 'javascript'
        },
        topologyLayout: {
            flowBounds: 2   // describes how many nodes should be laid out
                            // horizontally before flowing them to the next row.
                            // can be a number, or an array correlating to the
                            // Z index of each level  in ascending order.
        }
    });
