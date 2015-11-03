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
    'md.data.table',
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
        params: {'newEntry':null},
        resolve: {
          listEntries: function($http) {
            return $http.get("data/data.json");
          },
          newEntry: function($stateParams) {
            return $stateParams.newEntry;
          }
        }
      })
      .state('about', {
        url: "/about",
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('responsive',{
      url: '/list-responsive',
      templateUrl: 'views/contact-list-responsive.html',
      controller: 'contactListResponsiveCtrl',
      resolve: {
      listEntries: function(dataResponsive){
          return dataResponsive;
          }
        }
      })
      .state('AddEntry',{
      url: '/AddEntry',
      templateUrl:'/views/templates/addEntry.html',
      controller:'addEntryCtrl'
    });
  });
