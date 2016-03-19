var appProgram = angular.module('appProgram', ['ngRoute', 'ngResource', 'ngMaterial']);

appProgram.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);