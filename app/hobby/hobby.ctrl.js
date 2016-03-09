angular.module("appHobby").controller("hobbyController", ['$scope', '$resource', '$rootScope', 'hobbyService', function($scope, $resource, $rootScope, hobbyService){

    $scope.hobbyList = null;
    $scope.hobbyServiceList = null;
    $scope.hobbyReviewList = null;
 
    var init = function(){
        console.log("i am in hobby init");
        hobbyService.hobbyList()
        .then(
                    function(response){
                        $scope.hobbyList=response;
                        console.log($scope.hobbyList);
                    },
                    function(err){
                        console.log('error retrieving the hobbies: ', err);
                    }
                )            
    }
    
    $scope.hobbyReviews = function(hobbyid){
            console.log("in hobby review list service")
            console.log("hobby id in context is " + hobbyid)
            hobbyService.hobbyReviewList(x)
            .then(
                    function(response){                        
                        $scope.hobbyReviewList=response;
                        console.log($scope.hobbyReviewList);                        
                    },
                    function(err){
                        console.log('error retrieving hobby reviews: ', err);
                    }                 
            )
            
        }
    
    $scope.newHobbyServiceDetails={};
    
    $scope.subscribeToHobby = function(hob){
        $scope.newHobbyServiceDetails.hobby_id = 2;
        $scope.newHobbyServiceDetails.user_id = 6;
        $scope.newHobbyServiceDetails.nick_name = "just a joke";
        $scope.newHobbyServiceDetails.status = "E";
        $scope.newHobbyServiceDetails.end_date = "2016-02-19"
        console.log($scope.newHobbyServiceDetails);    
        //fields = ('id', 'hobby_id', 'user_id', 'nick_name', 'status', 'end_date', 'creation_timestamp')
        hobbyService.subscribeHobby($scope.newHobbyServiceDetails)
        .then(
                function(response){

                    $scope.hobbySubscribeResult=response;
                    console.log($scope.hobbySubscribeResult);

                },
                function(err){
                    console.log('error subscribing to the hobby: ', err);
                }                 
        )
    }
    $scope.activeParentIndex;
    $scope.showHobbyReviews = function(hobbyIndex, hobby){
        x = hobby.id;
        console.log("hobby id in the context is "+x);
        $scope.hobbyReviews(x);
        $scope.activeHobbyIndex = hobbyIndex;        
        
    }
    $scope.isShowing = function(hobbyIndex){
        return  $scope.activeHobbyIndex === hobbyIndex;
    };   
    
    
    init();
    
    
}]);