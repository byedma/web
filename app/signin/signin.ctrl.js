
angular.module("appSignIn").controller("signInController", ['$scope', '$resource', 'signInService', function($scope, $resource, signInService){
    
        $scope.newSignIn = null;
    
        //new sign-In Verification
        $scope.signin = function(){
            console.log("in login service")
            
            signInService.signIn($scope.newSignIn)
            .then(
                    function(response){
                        
                        $scope.signInResult=response;
                        console.log($scope.signInResult);
                        
                    },
                    function(err){
                        console.log('error logging in: ', err);
                    }                 
            )
            
        }
    
    
    
}]);