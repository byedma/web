angular.module("appRoutine").controller("routineController", ['$scope', '$resource', 'routineService', function($scope, $resource, routineService){

    $scope.routineList = null;
    $scope.routineServiceList = null;
    $scope.routineReviewList = null;
 
    var init = function(){
        console.log("i am in routine init");
        routineService.routineList()
        .then(
                    function(response){
                        $scope.routineList=response;
                        console.log($scope.routineList);
                    },
                    function(err){
                        console.log('error retrieving the routine: ', err);
                    }
                )            
    }
    
    $scope.routineReviews = function(routineid){
            console.log("in routine review list service")
            console.log("routine id in context is " + routineid)
            routineService.routineReviewList(routineid)
            .then(
                    function(response){                        
                        $scope.routineReviewList=response;
                        console.log($scope.routineReviewList);                        
                    },
                    function(err){
                        console.log('error retrieving routine reviews: ', err);
                    }                 
            )
            
        }  
    $scope.newRoutineServiceDetails={}; 
    
    
    
    $scope.recommendRoutine = function(){
        
        console.log("In Recommend Routine Section");
        
    }
    $scope.activeParentIndex;
    $scope.showRoutineReviews = function(routineIndex, routine){
        x = routine.id;
        console.log("routine id in the context is "+x);
        $scope.routineReviews(x);
        $scope.activeRoutineIndex = routineIndex;        
        
    }
    $scope.isShowing = function(routineIndex){
        return  $scope.activeRoutineIndex === routineIndex;
    }; 
    
    
    init();
    
    }]);