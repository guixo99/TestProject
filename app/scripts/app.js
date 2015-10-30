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
  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default').primaryPalette('teal').accentPalette('red');
    $mdThemingProvider.theme('altTheme').primaryPalette('red');

    $urlRouterProvider.otherwise("/list-entries");

    $stateProvider
      .state('list', {
        url: "/list-entries",
        templateUrl: 'views/list-entries.html',
        controller: 'ListCtrl',
        resolve: 'blogEntries'
      })
      .state('about', {
        url: "/about",
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('responsive',{
      url: '/list-responsive',
      templateUrl: 'views/list-responsive.html',
      controller: 'contactListResponsiveCtrl'
      })
      .state('AddEntry',{
      url: '/AddEntry',
      templateUrl:'/views/templates/addEntry.html',
      controller:'addEntryCtrl'
    });
  });
