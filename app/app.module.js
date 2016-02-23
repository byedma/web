
var hhliving = angular.module('hhliving', ['ngMaterial', 'appShell', 'appSignIn', 'appLanding', 'appSearch', 'appProfile', 'appProgram', 'appHabit', 'appHobby', 'appRoutine', 'appChallenge', 'appComponent', 'appData']);

hhliving.run(['$route', function($route)  {
  $route.reload();
}]);

