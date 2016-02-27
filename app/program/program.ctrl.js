angular.module("appProgram").controller("programController", ['$scope', '$resource', '$rootScope', 'programService', function($scope, $resource, $rootScope, programService){

    $scope.programList = null;
    $scope.programServiceList = null;
    $scope.programReviewList = null;
 
    var init = function(){
        console.log("i am in program init");
        programService.programList()
        .then(
                    function(response){
                        $scope.programList=response;
                        console.log($scope.programList);
                    },
                    function(err){
                        console.log('error retrieving the hobbies: ', err);
                    }
                )            
    }
    $scope.programServices = function(user_id){
            console.log("in program service list service")
            x = user_id;
            programService.programServiceList(x)
            .then(
                    function(response){                        
                        $scope.programServiceList=response;
                        console.log($scope.programServiceList);                        
                    },
                    function(err){
                        console.log('error retrieving program services for the user: ', err);
                    }                 
            )
            
        }     
    $scope.programReviews = function(programid){
            console.log("in program review list service")
            console.log("program id in context is " + programid)
            programService.programReviewList(x)
            .then(
                    function(response){                        
                        $scope.programReviewList=response;
                        console.log($scope.programReviewList);                        
                    },
                    function(err){
                        console.log('error retrieving program reviews: ', err);
                    }                 
            )
            
        }
    
    $scope.newProgramServiceDetails={};
    
    $scope.subscribeToProgram = function(hob){
        $scope.newProgramServiceDetails.program_id = 2;
        $scope.newProgramServiceDetails.user_id = 6;
        $scope.newProgramServiceDetails.nick_name = "just a joke";
        $scope.newProgramServiceDetails.status = "E";
        $scope.newProgramServiceDetails.end_date = "2016-02-19"
        console.log($scope.newProgramServiceDetails);    
        //fields = ('id', 'program_id', 'user_id', 'nick_name', 'status', 'end_date', 'creation_timestamp')
        programService.subscribeProgram($scope.newProgramServiceDetails)
        .then(
                function(response){

                    $scope.programSubscribeResult=response;
                    console.log($scope.programSubscribeResult);

                },
                function(err){
                    console.log('error subscribing to the program: ', err);
                }                 
        )
    }
    $scope.activeParentIndex;
    $scope.showProgramReviews = function(programIndex, program){
        x = program.id;
        console.log("program id in the context is "+x);
        $scope.programReviews(x);
        $scope.activeProgramIndex = programIndex;        
        
    }
    $scope.isShowing = function(programIndex){
        return  $scope.activeProgramIndex === programIndex;
    };   
    
    
    init();
    
    
}]);

