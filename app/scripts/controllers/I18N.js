'use strict';

angular.module('gsUiKsApp')
    .controller('I18nCtrl', ['$scope', 'gs.config', 'I18next', function ($scope, gsConfig, I18next) {

        $scope.translationFile = {
            code: '{\n\t"key": "value"\n}',
            language: gsConfig.codeblock.language.javascript
        }

        $scope.translations = [
            {
                title: 'English',
                lng: 'en'
            },
            {
                title: 'German',
                lng: 'de'
            }
        ];

        $scope.translate = function (lng) {
            I18next.setOptions({lng: lng});
        };

        $scope.tabs = [
            {
                title: $scope.tabsMeta.view.title,
                content: '<h4>{{ \'title\' | i18n }}</h4>\n<p>{{ \'paragraph\' | i18n }}</p>',
                language: gsConfig.codeblock.language.html
            }
        ];

    }]);
