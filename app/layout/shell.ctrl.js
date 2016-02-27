angular.module("appShell").controller("shellController", ['$scope','$rootScope', '$window','signInService', function($scope, $rootScope, $window, signInService){

        
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
            signInService.signOut($rootScope.globals)
            .then(
                    function(response){
                        console.log(response);
                        $rootScope.signOutResult=response;
                        console.log($rootScope.signOutResult);
                        $rootScope.login='SignedOut';
                        $rootScope.username='';
                        $window.location='/index.html#/landing';
                        },
                    function(err){
                        console.log('error logging out: ', err);
                    }                 
            )
            
        };        

        init();
}]);

