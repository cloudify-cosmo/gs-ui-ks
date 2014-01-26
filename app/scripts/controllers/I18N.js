'use strict';

angular.module('gsUiKsApp')
    .controller('I18nCtrl', ['$scope', 'gs.config', function ($scope, gsConfig) {

        $scope.translationFile = {
            code: '{\n\t"key": "value"\n}',
            language: gsConfig.codeblock.language.javascript
        }

        $scope.tabs = [
            {
                title: $scope.tabsMeta.view.title,
                content: '<h4>{{ \'title\' | i18n }}</h4>\n<p>{{ \'paragraph\' | i18n }}</p>',
                language: gsConfig.codeblock.language.html
            }
        ];

    }]);
