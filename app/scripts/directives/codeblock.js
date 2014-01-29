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
            template: function (tElement/*, tAttrs*/) {

                // allow for 'source' to come from element content or from attribute
                if (tElement.html()) {
                    return '<pre class="codeblock"><code>' + tElement.html() + '</code></pre>';
                }
                return '<pre class="codeblock"><code>{{ source }}</code></pre>';
            },
            link: function (scope, element/*, attrs*/) {

                scope.$watch('source', function (newValue/*, oldValue*/) {
                    newValue && element.html(newValue);
                });

                scope.$watch('language', function (newValue/*, oldValue*/) {
                    newValue && element.attr('data-language', newValue);
                });

                // highlight should be performed outside the current event loop to prevent issues with tag parsing
                timer(function () {
                    syntax.highlight(element);
                }, 0);
            }
        };
    }]);
