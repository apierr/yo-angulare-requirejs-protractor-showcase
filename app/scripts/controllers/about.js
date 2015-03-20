define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name yoAngulareRequirejsProtractorShowcaseApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the yoAngulareRequirejsProtractorShowcaseApp
   */
  angular.module('yoAngulareRequirejsProtractorShowcaseApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
