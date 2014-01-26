'use strict';

angular.module('gsUiKsApp')
    .directive('codeblock', ['$timeout', 'rainbow', function (timer, syntax) {
        return {
            template: '<pre class="codeblock"><code></code></pre>',
            restrict: 'A',
            replace: true,
            scope: true,
            link: function (scope, element, attrs) {

                var codeEl = element.find('code');

                function setCode(code) {
                    if (!!code) {
                        codeEl.html(code);
                    }
                }

                function setLanguage(lang) {
                    if (!!lang) {
                        codeEl.attr('data-language', lang);
                    }
                }

                scope.$watch(attrs.source, function (n, o) {
                    setCode(n);
                });

                scope.$watch(attrs.language, function (n, o) {
                    setLanguage(n);
                });

                // first initialization
                setCode(scope[attrs.source]);
                setLanguage(scope[attrs.language]);


                timer(function () {
                    syntax.highlight(element);
                }, 0);

            }
        };
    }]);
