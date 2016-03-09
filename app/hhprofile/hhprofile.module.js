var appHHProfile = angular.module('appHHProfile', ['ngRoute', 'ngResource', 'ui.calendar']);

appHHProfile.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);