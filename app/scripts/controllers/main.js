'use strict';

angular.module('gsUiKsApp')
    .controller('MainCtrl', ['$scope', 'gs.config', function ($scope, gsConfig) {

        $scope.tabsMeta = {
            html: {
                title: 'Markup',
                language: gsConfig.codeblock.html
            },
            javascript: {
                title: 'JavaScript',
                language: gsConfig.codeblock.javascript
            }
        };

        $scope.codemirrorOptions = gsConfig.codemirror;
    }]);
