
angular.module("appSignIn").controller("signInController", ['$scope', '$resource', '$rootScope', '$window', 'signInService', function($scope, $resource, $rootScope, $window, signInService){
    
        $scope.newSignIn = null;
    
        //new sign-In Verification
        $scope.signin = function(){
            console.log("in login service")
            
            signInService.signIn($scope.newSignIn)
            .then(
                    function(response){
                        $rootScope.disableSignInButton = {visibility: 'hidden'};
                        $rootScope.disableSignOutButton = {visibility: 'visible'};
                        $rootScope.disableRegisterButton = {visibility: 'hidden'};                         
                        $rootScope.signInResult=response;
                        $rootScope.login='success';
                        console.log($rootScope.signInResult);
                        $window.location='/index.html#/landing';
                        
                    },
                    function(err){
                        console.log('error logging in: ', err);
                    }                 
            )
            
        }
    
    
}]);