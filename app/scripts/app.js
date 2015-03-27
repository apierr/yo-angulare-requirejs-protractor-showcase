/*jshint unused: vars */
define([
    'angular',
    'route',
    'directives/stateful.directive'
    ], function (angular, route, statefulDirective) {
        'use strict';

        var app = angular
            .module('yoAngulareRequirejsProtractorShowcaseApp', [
                /*angJSDeps*/
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ngRoute',
                'ngAnimate',
                'ngTouch'
            ]);

        app.config(route)
        app.directive('ngStateful', statefulDirective);

        return app;
});
