import angular from 'angular';
import 'angular-ui-router';
import 'module/main/main.module.js';

angular.module('resourceManagement', ['ui.router', 'resourceManagement.main'])
    .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
        $urlRouterProvider.otherwise('/main');

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'app/modules/main/main.module.html',
                controller: 'mainController',
                controllerAs: 'mainCtrl'
            });

        $locationProvider.html5Mode(true);
    })
    .controller('resourceManagementController', resourceManagementController)
    .run(($rootScope, $state, $stateParams) => {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });

function resourceManagementController($scope, $state) {
    let self = this;
    self.message = 'I am in resourceManagement controller';
    $scope.stateObject = {};
    self.transitionTo = function(nextState) {
        $state.transitionTo(nextState);
    };
    self.transitionTo('main');
}

angular.bootstrap(document, ['resourceManagement']);