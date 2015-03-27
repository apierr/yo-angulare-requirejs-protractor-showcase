/*jshint unused: vars */
define([
  'angular', 
  'controllers/main', 
  'controllers/about',
  'route']/*deps*/, function (angular, MainCtrl, AboutCtrl, route)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name yoAngulareRequirejsProtractorShowcaseApp
   * @description
   * # yoAngulareRequirejsProtractorShowcaseApp
   *
   * Main module of the application.
   */
  return angular
    .module('yoAngulareRequirejsProtractorShowcaseApp', ['yoAngulareRequirejsProtractorShowcaseApp.controllers.MainCtrl',
'yoAngulareRequirejsProtractorShowcaseApp.controllers.AboutCtrl',
/*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch'
  ])
    .config(route);
});
