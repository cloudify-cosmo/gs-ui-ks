'use strict';

angular.module('gsUiKsApp')
    .directive('codeblock', ['$timeout', 'rainbow', function (timer, syntax) {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                source: '=',
                language: '='
            },
            template: function (tElement, tAttrs) {

                // allow for 'source' to come from element content or from attribute
                if (tElement.html()) {
                    return '<pre class="codeblock"><code>' + tElement.html() + '</code></pre>';
                }
                return '<pre class="codeblock"><code>{{ source }}</code></pre>';
            },
            link: function (scope, element, attrs) {

                scope.$watch('source', function (n, o) {
                    n && element.html(n);
                });

                scope.$watch('language', function (n, o) {
                    n && element.attr('data-language', n);
                });

                // highlight should be performed outside the current event loop to prevent issues with tag parsing
                timer(function () {
                    syntax.highlight(element);
                }, 0);
            }
        };
    }]);
