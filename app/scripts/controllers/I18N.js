'use strict';

angular.module('gsUiKsApp')
    .controller('I18nCtrl', ['$scope', 'gs.config', 'I18next', function ($scope, gsConfig, I18next) {

        $scope.translationFile = {
            code: '{\n\t"key": "value"\n}',
            language: gsConfig.codeblock.language.javascript
        }

        $scope.translations = [
            {
                title: 'English'
            },
            {
                title: 'German'
            }
        ];

        $scope.translate = function () {
            I18next.setOptions({lng: 'de'});
        };

        $scope.tabs = [
            {
                title: $scope.tabsMeta.view.title,
                content: '<h4>{{ \'title\' | i18n }}</h4>\n<p>{{ \'paragraph\' | i18n }}</p>',
                language: gsConfig.codeblock.language.html
            }
        ];

    }]);
