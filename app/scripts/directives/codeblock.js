'use strict';

angular.module('gsUiKsApp')
    .directive('codeblock', ['$timeout', 'rainbow', function (timer, syntax) {
        return {
            template: '<pre class="codeblock"><code></code></pre>',
            restrict: 'A',
            replace: true,
            scope: true,
            link: function(scope, element, attrs) {

                var codeEl = element.find('code');
                codeEl.attr('data-language', attrs.language);

                function setCode( code ){
                    if ( !!code ){
                        codeEl.html(code);
                    }
                }

                scope.$watch(attrs.source, function(value) {
                    setCode(value);
                });

                setCode( scope[attrs.source]); // first initialization


                timer(function () {
                    syntax.highlight(element);
                }, 0);

            }
        };
    }]);
