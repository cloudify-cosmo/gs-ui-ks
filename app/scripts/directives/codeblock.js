'use strict';

angular.module('gsUiKsApp')
    .directive('codeblock', ['$timeout', 'rainbow', function (timer, syntax) {
        return {
            template: '<pre class="codeblock"><code>this is the codeblock directive</code></pre>',
            restrict: 'A',
            replace: true,
            scope: true,
            link: function(scope, element, attrs) {

                var codeEl = element.find('code');
                codeEl.attr('data-language', attrs.language);
                scope.$watch(attrs.source, function(value) {
                    codeEl.html(value);
                });
                timer(function () {
                    syntax.highlight(element);
                }, 0);

            }
        };
    }]);
