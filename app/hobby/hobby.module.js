var appHobby = angular.module('appHobby', ['ngRoute', 'ngResource']);

appHobby.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);