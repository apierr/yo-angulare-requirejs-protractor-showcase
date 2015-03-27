/*jshint unused: vars */
define([
  'angular',
  'route']/*deps*/, function (angular, route)/*invoke*/ {
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
    .module('yoAngulareRequirejsProtractorShowcaseApp', [
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
