/*jslint node: true */
'use strict';

var angular = require('angular');
require('angular-route');
require('angular-resource');
require('leaflet');
require('leaflet-draw');
/*require('angular-leaflet-directive');*/
/*require('angularjs-datepicker');*/
require('elasticsearch');
/* require('angular-jwt');
require('angular-base64');
require('angular-npolar');
require('lodash'); */

/*stylesheets*/
require('./src/css/app.css');


var appSighting = angular.module('sighting',[
  'ngRoute',
/*  'sightingControllers',
  'sightingServices', */   /*Edit service*/
/*  'leaflet-directive', */   /*Map*/
/*  '720kb.datepicker', */    /*Calendar*/
  /*'angular-jwt',  */     /* JWT interaction*/
  'ngResource'
/*  'base64',
  'npolarApi' */   /*Logon NP style*/
]);



//Routing to the individual pages
//Open - open to all,
//User - with user login
//Admin - for administrators
appSighting.controller('PanelCtrl', require('./src/js/PanelCtrl'));
appSighting.controller('SightingCtrl', require('./src/js/SightingCtrl'));
appSighting.controller('AdminObservationsCtrl', require('./src/js/AdminObservationsCtrl'));
appSighting.controller('QualityCtrl', require('./src/js/QualityCtrl'));
appSighting.controller('MapCtrl', require('./src/js/MapCtrl'));
appSighting.controller('CSVCtrl', require('./src/js/CSVCtrl'));
appSighting.controller('MyObservationsCtrl', require('./src/js/MyObservationsCtrl'));
appSighting.controller('ViewObservationCtrl', require('./src/js/ViewObservationCtrl'));
appSighting.controller('NewObservationCtrl', require('./src/js/NewObservationCtrl'));
appSighting.controller('EditObservationCtrl', require('./src/js/EditObservationCtrl'));
appSighting.controller('DeleteObservationCtrl', require('./src/js/DeleteObservationCtrl'));
appSighting.controller('UploadObservationsCtrl', require('./src/js/UploadObservationsCtrl'));
appSighting.service('SightingDBUpdate', require('./src/js/SightingDBUpdate'));
appSighting.service('CSVService', require('./src/js/CSVService'));
appSighting.directive('fileInput', require('./src/js/fileInput'));
/*appSighting.directive('ngLoginLogout', require('./src/js/ngLoginLogout'));*/



appSighting.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: './src/partials/open/login.html',
        controller: 'SightingCtrl',
      }).
      when('/observe', {
        templateUrl: './src/partials/open/become_observer.html',
        controller: 'SightingCtrl'
      }).
      when('/learn', {
        templateUrl: './src/partials/open/species.html',
        controller: 'SightingCtrl'
      }).
      when('/observers', {
        templateUrl: './src/partials/open/observers.html',
        controller: 'SightingCtrl'
      }).
      when('/observations', {
        templateUrl: './src/partials/user/my_observations.html',
        controller: 'MyObservationsCtrl'
      }).
      when('/observation', {
        templateUrl: './src/partials/user/new_observation.html',
        controller: 'NewObservationCtrl'
      }).
      when('/observation/:id', {
        templateUrl: './src/partials/user/view_observation.html',
        controller: 'ViewObservationCtrl'
      }).
      when('/observation/edit/:id', {
        templateUrl: './src/partials/user/edit_observation.html',
        controller: 'EditObservationCtrl'
      }).
      /*This entry is for copying old info onto new entries */
      when('/observation/copy/:id', {
        templateUrl: './src/partials/user/new_observation.html',
        controller: 'NewObservationCtrl'
      }).
      when('/observation/delete/:id', {
        templateUrl: './src/partials/user/delete_observation.html',
        controller: 'DeleteObservationCtrl'
      }).
      when('/upload', {
        templateUrl: './src/partials/user/upload.html',
        controller: 'UploadObservationsCtrl'
      }).
      when('/all', {
        templateUrl: './src/partials/admin/all.html',
        controller: 'AdminObservationsCtrl'
      }).
      when('/csv', {
        templateUrl: './src/partials/admin/csv.html',
        controller: 'CSVCtrl'
      }).
       when('/quality_check', {
        templateUrl: './src/partials/admin/quality_check.html',
        controller: 'QualityCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);


/*var sightingResources = [
  {"path": "/user", "resource": "User"},
  {"path": "/sighting", "resource": "Sighting" }
];

angular.forEach(sightingResources, function(service) {
 appSighting.factory(service.resource, function(NpolarApiResource){
    return NpolarApiResource.resource(service);
  });
}); */



 // Auth interceptor -add to HTTP header
/*appSighting.config(function($httpProvider, npolarApiAuthInterceptorProvider) {
   $httpProvider.interceptors.push("npolarApiAuthInterceptor");
});*/


// Inject config and run
/*appSighting.run(function(npolarApiConfig, $http, npolarApiSecurity, npolarApiUser) {

  $http.get("./npolarApiConfig.json").success(function(config) {

    var environment = config.environment || npolarApiConfig.environment;
    angular.extend(npolarApiConfig, _.find(config.config, { environment: environment}));


  }).error(function(response) {
    console.log("npolarApiConfig -error", npolarApiConfig);
  });

}); */
