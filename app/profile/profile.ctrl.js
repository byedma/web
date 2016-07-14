
angular.module("appProfile").controller("profileController", ['$scope', '$resource', '$window', '$rootScope', 'userProfileService', 'circleService', 'circleMemberService',function($scope, $resource, $window, $rootScope, userProfileService, circleService, circleMemberService){
        
        $scope.userProfile = null;
        $scope.circleMemberList = null;
        
        userid = $rootScope.signInResult.id;
        var init = function(){
        //retrieve customer registration details to display for update
        userProfileService.userDetails(userid)
        .then(
                    function(response){
                        $scope.userProfile=response;
                        $scope.userProfile.date_of_birth = new Date($scope.userProfile.date_of_birth);
                        console.log($scope.userProfile);
                    },
                    function(err){
                        console.log('error retrieving the user details: ', err);
                    }
                )
        //retrieve all the circles for the user, where he is a playing a role
        circleService.circleList()
        .then(
                    function(response){
                        $scope.circleList=response;
                        console.log($scope.circleList);
                    },
                    function(err){
                        console.log('error retrieving the circles: ', err);
                    }
                )            
        }
        
        //user profile service calls
        //update user profile
        $scope.updateUserProfile = function(){
            console.log("in update function, about to call put service")
            userProfileService.updateUser($scope.userProfile)
            .then(
                    function(response){
                        $scope.userProfileUpdateResult=response;
                        console.log($scope.userProfileUpdateResult);
                    },
                    function(err){
                        console.log('error updating the user details: ', err);
                    }            
            )
        }
        
        //circle services
        $scope.circleDetails = null;
        $scope.newCircleDetails = null;
    
        //creating a new circle
        $scope.createCircle = function(){
            console.log("in create circle function, about to call post service")
            //default values for 2 fields, while others come from the form input
            $scope.newCircleDetails.created_by = 1;
            $scope.newCircleDetails.status = "A";
            //
            console.log($scope.newCircleDetails);
            circleService.createCircle($scope.newCircleDetails)
            .then(
                    function(response){
                        
                        $scope.circleCreateResult=response;
                        console.log($scope.circleCreateResult);
                        
                    },
                    function(err){
                        console.log('error creating the new circle: ', err);
                    }                 
            )
            
        }
        //update circle
        $scope.updateCircle = function(){
            console.log("in update function, about to call put service")
            circleService.updateCircle($scope.circleDetails)
            .then(
                    function(response){
                        $scope.circleUpdateResult=response;
                        console.log($scope.circleUpdateResult);
                    },
                    function(err){
                        console.log('error updating the circle details: ', err);
                    }            
            )
        }        
        //delete circle
        $scope.deleteCircle = function(cir){
            console.log("in delete function, about to call delete service")
            console.log(cir)
            x = cir.id;
            console.log("id is " + x)
            
            circleService.deleteCircle(x)
            .then(
                    function(response){
                        $scope.circleDeleteResult=response;
                        console.log($scope.circleDeleteResult);
                    },
                    function(err){
                        console.log('error deleting the circle: ', err);
                    }            
            )
        }  
        //retrieve circle details
        $scope.getCircleDetails = function(){
            console.log("in circle details function, about to call get service")
            circleService.getCircleDetails($scope.circleDetails.id)
            .then(
                    function(response){
                        $scope.circleDetailsResult=response;
                        console.log($scope.circleDetailsResult);
                    },
                    function(err){
                        console.log('error getting circle details: ', err);
                    }            
            )
        }
        // utility functions
        $scope.showCircleCreateForm = function(){
            $scope.showNewCircleForm = true;

        }
        $scope.showCircleMembers = function(cir){
        x = cir.id;
        console.log("id is " + x)
        
        circleMemberService.circleMemberList(x)
        .then(
                    function(response){
                        $scope.circleMemberList = response;
                        console.log($scope.circleMemberList);
                    },
                    function(err){
                        console.log('error retrieving the circle members: ', err);
                    }
                )
            
            $scope.showCircleMemberForm = true;
            
            }
               
//        //circle member services
//        $scope.circleMemberDetails = null;
//        $scope.newCircleMemberDetails = null;
//        
//        //update circle member
//        
//        $scope.updateCircleMember = function(){
//            console.log("in update function, about to call put service")
//            circleService.updateCircleMember($scope.circleMemberDetails)
//            .then(
//                    function(response){
//                        $scope.circleMemberUpdateResult=response;
//                        console.log($scope.circleMemberUpdateResult);
//                    },
//                    function(err){
//                        console.log('error updating the circle details: ', err);
//                    }            
//            )
//        }        
        //delete circle member
//        $scope.deleteCircleMember = function(cir){
//            console.log("in delete function, about to call delete service")
//            console.log(cir)
//            x = cir.id;
//            console.log("id is " + x)
//            
//            circleService.deleteCircleMember(x)
//            .then(
//                    function(response){
//                        $scope.circleMemberDeleteResult=response;
//                        console.log($scope.circleMemberDeleteResult);
//                    },
//                    function(err){
//                        console.log('error deleting the circle: ', err);
//                    }            
//            )
//        }
        

        
        
    init();
    
    
}]);

