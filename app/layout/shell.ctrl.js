angular.module("appShell").controller("shellController", function($scope, $location){

    $scope.shellRoute = function(string){
    console.log(string);    
    console.log($location.path());
    $location.path(string);
    console.log($location.path()); 
      
    }
    $scope.$on('$routeUpdate', function(){
      $scope.sort = $location.search().sort;
      $scope.order = $location.search().order;
      $scope.offset = $location.search().offset;
    });
    
});

