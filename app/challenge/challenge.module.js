var appChallenge = angular.module('appChallenge', ['ngRoute', 'ngResource']);

appChallenge.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);