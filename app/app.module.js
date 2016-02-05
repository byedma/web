
var hhliving = angular.module('hhliving', ['appShell', 'appLanding', 'appSearch', 'appProfile', 'appProgram', 'appHabit', 'appHobby', 'appRoutine', 'appChallenge', 'appComponent', 'appData']);

hhliving.run(['$route', function($route)  {
  $route.reload();
}]);

