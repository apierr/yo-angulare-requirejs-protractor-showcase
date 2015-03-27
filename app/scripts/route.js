(function (define) {
    define([
        'controllers/main', 
        'controllers/password.controller'
    ], function (mainCtrl, passwordController) {
        return function ($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: passwordController
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: passwordController
            })
            .otherwise({
                redirectTo: '/'
            });
        }
    })
}(this.define));
