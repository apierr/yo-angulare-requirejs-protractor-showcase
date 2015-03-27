(function (define) {
    define([
    ], function (argument) {
        return function ($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        }
    })
}(this.define));
