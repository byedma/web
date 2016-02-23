angular.module("appShell").controller("shellController", ['$scope','$rootScope','signInService', function($scope, $rootScope, signInService){

        
        $rootScope.disableSignInButton = {visibility: 'hidden'};
        $rootScope.disableSignOutButton = {visibility: 'hidden'};
        $rootScope.disableRegisterButton = {visibility: 'hidden'};    
        var init = function(){
            console.log("login value"+ $rootScope.login)
            if ($rootScope.login=="Success"){
                $rootScope.disableSignOutButton = {visibility: 'visible'};
            }
            else if($rootScope.login=="SignedOut"){
                $rootScope.disableSignInButton = {visibility: 'visible'};
            }
            else {
                $rootScope.disableSignInButton = {visibility: 'visible'};
                $rootScope.disableRegisterButton = {visibility: 'visible'};                        
            }    

        }
    
        $scope.signOut = function(){
            console.log("in logout service")
            console.log($rootScope.signInResult);
            signInService.signOut($rootScope.signInResult)
            .then(
                    function(response){
                        console.log(response);
                        $rootScope.signOutResult=response;
                        console.log($rootScope.signOutResult);
                        $rootScope.login='SignedOut';
                        },
                    function(err){
                        console.log('error logging out: ', err);
                    }                 
            )
            
        }

        init();
}]);

