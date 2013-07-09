'use strict';

angular.module('gsUiKsApp', ['ui.bootstrap'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })
    })
    .factory('rainbow', function () {
        return {
            highlight: function(e) {
                // see: http://craig.is/making/rainbows/
                Rainbow.color(e);
            }
        }
    })
    .value('gs.config', {
        codeblock: {
            language: {
                html: 'html',
                javascript: 'javascript'
            }
        }
    });
