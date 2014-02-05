'use strict';

angular.module('groceryApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/trips', {
        templateUrl: 'views/trips.html',
        controller: 'TripsCtrl'
      })
      .when('/trips/:id', {
        templateUrl: 'views/trip_detail.html',
        controller: 'TripsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
