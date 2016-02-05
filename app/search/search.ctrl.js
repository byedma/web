angular.module("appSearch").controller("searchController", function($scope){
    
    $scope.$on("search", search);
    function search(evt, data){
        console.log(data.str);
        
    }
    
});