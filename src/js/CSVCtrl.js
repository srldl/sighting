'use strict';
/* Admin module */

/*Controller for CSV print */
// @ngInject
var CSVCtrl = function($scope, CSVService) {
    $scope.entries = CSVService.entryObject;
};

module.exports = CSVCtrl;