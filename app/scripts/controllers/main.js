'use strict';

angular.module('gsUiKsApp')
    .controller('MainCtrl', ['$scope', 'gs.config', function ($scope, gsConfig) {

        $scope.language = {
            html: gsConfig.codeblock.language.html,
            css: gsConfig.codeblock.language.css,
            javascript: gsConfig.codeblock.language.javascript
        };

        $scope.tabsMeta = {
            view: {
                title: 'View',
                language: $scope.language.html
            },
            controller: {
                title: 'Controller',
                language: $scope.language.javascript
            }
        };

        $scope.codemirrorOptions = gsConfig.codemirror;

        $scope.dependencies = [
            {
                name: 'AngularJS',
                link: 'http://angularjs.org/'
            },
            {
                name: 'D3',
                link: 'http://d3js.org/'
            },
            {
                name: 'RaphaelJS',
                link: 'http://raphaeljs.com/'
            },
            {
                name: 'I18Next',
                link: 'http://i18next.com/'
            }
        ];

    }]);
