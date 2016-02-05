angular.module("appShell").controller("shellController", function($scope, $location){

    $scope.shellRoute = function(string){
    console.log(string);    
    console.log($location.path());
    $location.path(string);
    console.log($location.path()); 
       
    }

    
});

