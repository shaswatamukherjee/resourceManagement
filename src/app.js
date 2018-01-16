import 'babel/external-helpers';
import angular from 'angular';

angular.module('resourceManagement', [])
    .controller('resourceManagementController', resourceManagementController);

function resourceManagementController($rootScope, $location) {
    console.log('I am in resourceManagement controller');
    $rootScope.transferTo = function (path) {
        $location.url('/' + path);
    };
}

angular.bootstrap(document.body, ['resourceManagement']);