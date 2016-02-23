var appHabit = angular.module('appHabit', ['ngRoute', 'ngResource']);

appHabit.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);