'use strict';

angular.module('gsUiKsApp', ['ui.codemirror', 'ui.bootstrap', 'gsUiInfra'])
    .config(function ($routeProvider, $locationProvider) {
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
                javascript: 'javascript'
            }
        },
        codemirror: {
            lineWrapping: true,
            lineNumbers: true,
            mode: 'javascript'
        }
    });
