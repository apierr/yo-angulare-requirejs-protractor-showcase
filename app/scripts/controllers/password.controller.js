/*global angular*/
(function (define) {
    'use strict';
    define([], function () {
        return ['$scope', function ($scope) {

            $scope.password = '';
            $scope.strength = 'weak';

            $scope.grade = function() {

                var size = $scope.password.length;

                if (size > 8) {
                    $scope.strength = 'strong';
                } else if (size > 3) {
                    $scope.strength = 'medium';
                } else {
                    $scope.strength = 'weak';
                }

            };

        }]
    });
}(this.define));
