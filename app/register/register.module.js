var appRegister = angular.module('appRegister', ['ngRoute', 'ngResource', 'vcRecaptcha']);


appRegister.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);