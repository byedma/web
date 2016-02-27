angular.module("appChallenge").controller("challengeController", ['$scope', '$resource', '$rootScope', 'challengeService', function($scope, $resource, $rootScope, challengeService){

    $scope.challengeList = null;
    $scope.challengeServiceList = null;
    $scope.challengeReviewList = null;
 
    var init = function(){
        console.log("i am in challenge init");
        challengeService.challengeList()
        .then(
                    function(response){
                        $scope.challengeList=response;
                        console.log($scope.challengeList);
                    },
                    function(err){
                        console.log('error retrieving the challenges: ', err);
                    }
                )            
    }
    $scope.challengeServices = function(user_id){
            console.log("in challenge service list service")
            x = user_id;
            challengeService.challengeServiceList(x)
            .then(
                    function(response){                        
                        $scope.challengeServiceList=response;
                        console.log($scope.challengeServiceList);                        
                    },
                    function(err){
                        console.log('error retrieving challenge services for the user: ', err);
                    }                 
            )
            
        }     
    $scope.challengeReviews = function(challengeid){
            console.log("in challenge review list service")
            console.log("challenge id in context is " + challengeid)
            challengeService.challengeReviewList(x)
            .then(
                    function(response){                        
                        $scope.challengeReviewList=response;
                        console.log($scope.challengeReviewList);                        
                    },
                    function(err){
                        console.log('error retrieving challenge reviews: ', err);
                    }                 
            )
            
        }
    
    $scope.newChallengeServiceDetails={};
    
    $scope.subscribeToChallenge = function(ch){
        $scope.newChallengeServiceDetails.challenge_id = 2;
        $scope.newChallengeServiceDetails.user_id = 6;
        $scope.newChallengeServiceDetails.nick_name = "just a joke";
        $scope.newChallengeServiceDetails.status = "E";
        $scope.newChallengeServiceDetails.end_date = "2016-02-19"
        console.log($scope.newChallengeServiceDetails);    
        //fields = ('id', 'challenge_id', 'user_id', 'nick_name', 'status', 'end_date', 'creation_timestamp')
        challengeService.subscribeChallenge($scope.newChallengeServiceDetails)
        .then(
                function(response){

                    $scope.challengeSubscribeResult=response;
                    console.log($scope.challengeSubscribeResult);

                },
                function(err){
                    console.log('error subscribing to the challenge: ', err);
                }                 
        )
    }
    $scope.activeParentIndex;
    $scope.showChallengeReviews = function(challengeIndex, challenge){
        x = challenge.id;
        console.log("challenge id in the context is "+x);
        $scope.challengeReviews(x);
        $scope.activeChallengeIndex = challengeIndex;        
        
    }
    $scope.isShowing = function(challengeIndex){
        return  $scope.activeChallengeIndex === challengeIndex;
    };   
    
    
    init();
    
    
}]);