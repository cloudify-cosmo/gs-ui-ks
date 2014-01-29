'use strict';

angular.module('gsUiKsApp')
    .controller('PieprogressCtrl', function ($scope, $timeout) {

        /* Example 1 */
        $scope.dataPie = {
            'succeed': 20,
            'error': 45,
            'warning': 35
        };
        var PieDemo = function () {
            $scope.dataPie.succeed = Math.random() * 100;
            $scope.dataPie.error = $scope.dataPie.succeed * Math.random() * 50 / 100;
            $scope.dataPie.warning = 100 - $scope.dataPie.succeed - $scope.dataPie.error;
            $timeout(PieDemo, 3000);
        };
        $timeout(PieDemo, 3000);


        /* Example 2 and 3 */
        $scope.dataGradual = {
            'progress': 5
        };
        var gradualDemo = function () {
            $scope.dataGradual.progress++;
            if ($scope.dataGradual.progress < 100) {
                $timeout(gradualDemo, 30);
            }
            else {
                $timeout(function () {
                    $scope.dataGradual.progress = 0;
                    gradualDemo();
                }, 4000);
            }
        };
        $timeout(gradualDemo, 2000);


        /* Example 4 */
        $scope.dataDown = {
            'down': 100
        };
        var downDemo = function () {
            $scope.dataDown.down--;
            if ($scope.dataDown.down > 0) {
                $timeout(downDemo, 500);
            }
            else {
                $timeout(function () {
                    $scope.dataDown.down = 100;
                    downDemo();
                }, 1000);
            }
        };
        $timeout(downDemo, 2000);


        /* Example 5 */
        $scope.dataJump = {
            'inside': 5
        };
        var JumpDemo = function () {
            $scope.dataJump.inside = Math.random() * 100;
            $timeout(JumpDemo, 2000);
        };
        $timeout(JumpDemo, 2000);


        $scope.dataPieExample = '$scope.dataPie = ' + JSON.stringify($scope.dataPie, $scope.themeReplacer, 4);
        $scope.dataPieExampleCss = 'path.succeed {\n\tfill: #cce80b;\n}';
        $scope.dataHtmlExample = '<div pie:progress="dataDown" class="piProgress" size="100">\n\t<div class="insideCircle">\n\t\t<p>{{ bind_Data }}</p>\n\t</div>\n</div>';

        $scope.tabs = [
            {
                title: $scope.tabsMeta.view.title,
                content: '&lt;div pie:progress=&quot;dataJump&quot; class=&quot;piProgress&quot; size=&quot;300&quot;&gt;&lt;/div&gt;',
                language: $scope.language.html
            },
            {
                title: $scope.tabsMeta.controller.title,
                content: $scope.dataPieExample,
                language: $scope.language.javascript
            }
        ];

    });
