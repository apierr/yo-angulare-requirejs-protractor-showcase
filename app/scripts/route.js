(function (define) {
    define([
        'controllers/main', 
        'controllers/about',
    ], function (MainCtrl, AboutCtrl) {
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
