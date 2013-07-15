'use strict';

angular.module('gsUiKsApp')
    .directive('codeblock', ['$timeout', 'rainbow', function (timer, syntax) {
        return {
            template: '<pre class="codeblock"><code></code></pre>',
            restrict: 'E',
            replace: true,
            scope: true,
            link: function postLink(scope, element, attrs) {

                var codeEl = element.find('code');
                codeEl.attr('data-language', attrs.language);

                console.log(attrs);
                scope.$watch(attrs.source, function(value) {
                    codeEl.html(value);
                });

                timer(function () {
                    syntax.highlight(element);
                }, 0);

            }
        };
    }]);
