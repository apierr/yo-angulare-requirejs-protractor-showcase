(function (define) {
    'use strict';
    define([], function () {
        return function () {
            return {
                restrict: 'A', // only matches attribute name
                scope: false,
                // Creating a Directive that Manipulates the DOM
                link: function link(scope, element, attrs) {
                    if (!attrs.ngStateful) {
                        throw 'You must provide a class name in order to use the ngStateful directive.';
                    }

                    element.bind('click', function () {

                        scope.$apply(function () {
                            if (!element.hasClass(attrs.ngStateful)) {
                                element.addClass(attrs.ngStateful);
                            } else {
                                element.removeClass(attrs.ngStateful);
                            }
                        });
                    });
                } 
            };
        };
    });
}(this.define));
