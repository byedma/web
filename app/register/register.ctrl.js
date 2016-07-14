
angular.module("appRegister").controller("registerController", ['$scope', '$resource', '$window', '$rootScope', 'userProfileService',function($scope, $resource, $window, $rootScope, userProfileService){
 
    $scope.newUserProfile=null;
    $scope.recaptchaResponse=null;
    //creating a new user
        $scope.createUserProfile = function(recaptchaResponse){
            console.log("in create function, about to call post service")
            userProfileService.createUser($scope.newUserProfile)
            .then(
                    function(response){
                        $scope.userProfileCreateResult=response;
                        console.log($scope.userProfileCreateResult);
                        console.log(recaptchaResponse);
                        $rootScope.status="Dear User, Your Login is Created Successfully, Please login now";
                        $window.location='#/signin';
                        
                    },
                    function(err){
                        console.log('error creating the new user: ', err);
                    }            
            )
        }
        
        //recaptcha, documented at https://github.com/VividCortex/angular-recaptcha
        
        $scope.setWidgetId = function (widgetId) {
            // store the `widgetId` for future usage.
            // For example for getting the response with
            // `recaptcha.getResponse(widgetId)`.
        };

        $scope.setResponse = function (response) {
            // send the `response` to your server for verification.
        };

        $scope.cbExpiration = function() {
            // reset the 'response' object that is on scope
        };    
}]);