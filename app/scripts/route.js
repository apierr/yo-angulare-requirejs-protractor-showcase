(function (define) {
    define([
        'controllers/main', 
        'controllers/about'
    ], function (mainCtrl, aboutCtrl) {
        return function ($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: mainCtrl
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: aboutCtrl
            })
            .otherwise({
                redirectTo: '/'
            });
        }
    })
}(this.define));
