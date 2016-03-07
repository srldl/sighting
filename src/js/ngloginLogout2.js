'use strict';

/**
 * @ngInject
 */
var ngloginLogout2 = function (NpolarApiSecurity, npolarApiConfig, $http) {
  return {
   scope: {},
   controller: 'NpolarLoginController',
   templateUrl: 'partials/open/_myuser.html',
   link: function(scope) {

      scope.user = NpolarApiSecurity.getUser();
      console.log("ngloginLogout2");
      console.log(scope.user);
      scope.edits = [];
   }
  };
};

module.exports = ngloginLogout2;
