'use strict';

/**
 * @ngdoc overview
 * @name testProjectApp
 * @description
 * # testProjectApp
 *
 * Main module of the application.
 */
angular
  .module('testProjectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/list-entries");

    $stateProvider
      .state('list', {
        url: "/list-entries",
        templateUrl: 'views/list-entries.html',
        controller: 'ListCtrl',
        resolve: {
          listEntries: function($http) {
            return $http.get("data/data.json");
          }
        }
      })
      .state('about', {
        url: "/about",
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
  });
