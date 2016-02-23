angular.module("appHabit").controller("habitController", ['$scope', '$resource', 'habitService', function($scope, $resource, habitService){

    $scope.habitList = null;
    $scope.habitServiceList = null;
    $scope.habitReviewList = null;
 
    var init = function(){
        console.log("i am in habit init");
        habitService.habitList()
        .then(
                    function(response){
                        $scope.habitList=response;
                        console.log($scope.habitList);
                    },
                    function(err){
                        console.log('error retrieving the habits: ', err);
                    }
                )            
    }
    $scope.habitServices = function(user_id){
            console.log("in habit service list service for the user")
            x = user_id;
            habitService.habitServiceList(x)
            .then(
                    function(response){                        
                        $scope.habitServiceList=response;
                        console.log($scope.habitServiceList);                        
                    },
                    function(err){
                        console.log('error retrieving habit service list: ', err);
                    }                 
            )
            
        }     
    $scope.habitReviews = function(habitid){
            console.log("in habit review list service")
            console.log("habit id in context is " + habitid)
            habitService.habitReviewList(habitid)
            .then(
                    function(response){                        
                        $scope.habitReviewList=response;
                        console.log($scope.habitReviewList);                        
                    },
                    function(err){
                        console.log('error retrieving habit reviews: ', err);
                    }                 
            )
            
        }  
    $scope.newHabitServiceDetails={};
    
    $scope.subscribeToHabit = function(hab){
        $scope.newHabitServiceDetails.habit_id = 2;
        $scope.newHabitServiceDetails.user_id = 6;
        $scope.newHabitServiceDetails.nick_name = "just a joke";
        $scope.newHabitServiceDetails.status = "E";
        $scope.newHabitServiceDetails.end_date = "2016-02-19"
        console.log($scope.newHabitServiceDetails);    
        //fields = ('id', 'habit_id', 'user_id', 'nick_name', 'status', 'end_date', 'creation_timestamp')
        habitService.subscribeHabit($scope.newHabitServiceDetails)
        .then(
                function(response){

                    $scope.habitSubscribeResult=response;
                    console.log($scope.habitSubscribeResult);

                },
                function(err){
                    console.log('error subscribing to the habit: ', err);
                }                 
        )
    }    
    $scope.recommendHabit = function(){
        
        console.log("In Recommend Habit Section");
        
    }
    $scope.activeParentIndex;
    $scope.showHabitReviews = function(habitIndex, habit){
        x = habit.id;
        console.log("habit id in the context is "+x);
        $scope.habitReviews(x);
        $scope.activeHabitIndex = habitIndex;        
        
    }
    $scope.isShowing = function(habitIndex){
        return  $scope.activeHabitIndex === habitIndex;
    };   
    
    init();
}]);