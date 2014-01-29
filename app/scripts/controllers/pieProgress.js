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
        var GradualDemo = function () {
            $scope.dataGradual.progress++;
            if ($scope.dataGradual.progress < 100) {
                $timeout(GradualDemo, 30);
            }
            else {
                $timeout(function () {
                    $scope.dataGradual.progress = 0;
                    GradualDemo();
                }, 4000)
            }
        };
        $timeout(GradualDemo, 2000);


        /* Example 4 */
        $scope.dataDown = {
            'down': 100
        };
        var DownDemo = function () {
            $scope.dataDown.down--;
            if ($scope.dataDown.down > 0) {
                $timeout(DownDemo, 500);
            }
            else {
                $timeout(function () {
                    $scope.dataDown.down = 100;
                    DownDemo();
                }, 1000)
            }
        };
        $timeout(DownDemo, 2000);


        /* Example 5 */
        $scope.dataJump = {
            'inside': 5
        };
        var JumpDemo = function () {
            $scope.dataJump.inside = Math.random() * 100;
            $timeout(JumpDemo, 2000);
        };
        $timeout(JumpDemo, 2000);


        $scope.dataPieExample = '$scope.dataPie = ' + JSON.stringify($scope.dataPie, $scope.themeReplacer, 2);
        $scope.dataPieExampleCss = 'path.succeed { fill: <b style="color: #cce80b">#cce80b</b>; }';
        $scope.dataHtmlExample = '&lt;div pie:progress=&quot;dataDown&quot; class=&quot;piProgress&quot; size=&quot;100&quot;&gt;<br>&nbsp;&nbsp;&lt;div class=&quot;insideCircle&quot;&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;{{ bind_Data }}&lt;/p&gt;<br>&nbsp;&nbsp;&lt;/div&gt;<br>&lt;/div&gt;';

        $scope.tabs = [
            {
                title: $scope.tabsMeta.view.title,
                content: '&lt;div pie:progress=&quot;dataJump&quot; class=&quot;piProgress&quot; size=&quot;300&quot;&gt;&lt;/div&gt;'
            },
            {
                title: $scope.tabsMeta.controller.title,
                content: $scope.dataPieExample
            }
        ];

    });
