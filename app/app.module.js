
var hhliving = angular.module('hhliving', ['ngMaterial', 'ngCookies', 'appShell', 'appSignIn', 'appLanding', 'appSearch', 'appProfile', 'appProgram', 'appHabit', 'appHobby', 'appRoutine', 'appChallenge', 'appComponent', 'appData', 'appCore', 'appHHProfile', 'appRegister', 'ui.calendar', 'googlechart']);

hhliving.run(['$route', function($route)  {
  $route.reload();
}]);

