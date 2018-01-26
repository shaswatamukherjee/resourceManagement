import angular from 'angular';

angular.module('resourceManagement.main', [])
    .controller('mainController', mainController);

function mainController() {
    let self = this;
    self.left = 'This is the left panel';
    self.right = 'This is the right panel';
}