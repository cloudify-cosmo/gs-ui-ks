'use strict';

angular.module('gsUiKsApp')
    .controller('MainCtrl', ['$scope', 'gs.config', 'I18next', function ($scope, gsConfig, I18next) {

        $scope.tabsMeta = {
            html: {
                title: 'Markup',
                language: gsConfig.codeblock.language.html
            },
            javascript: {
                title: 'JavaScript',
                language: gsConfig.codeblock.language.javascript
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
