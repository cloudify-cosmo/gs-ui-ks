'use strict';

angular.module('gsUiKsApp')
    .controller('I18nCtrl', ['$scope', '$window', 'gs.config', function ($scope, $window, gsConfig) {

        $scope.init = $window.i18n.init();

        $scope.translate = function () {
            console.log($scope.init);
        }

        $scope.translation = {
            code: '{\n\t"key": "value"\n}',
            language: gsConfig.codeblock.language.javascript
//            language: 'JavaJavaJava'
        }
    }]);
