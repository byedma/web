
angular.module("appSignIn").controller("signInController", ['$scope', '$resource', '$rootScope', '$window', '$cookies', '$http', 'signInService', 'base64Service', function($scope, $resource, $rootScope, $window, $cookies, $http, signInService, base64Service){
    
        $scope.newSignIn = null;
        //clearing any credentials                                                    
        var init = function(){clearCredentials();};
                                                            
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
                        setCredentials($scope.newSignIn.email, $scope.newSignIn.password);                                    
                        $window.location='/index.html#/landing';
                        
                    },
                    function(err){
                        console.log('error logging in: ', err);
                    }                 
            )
            
        };
                                                            
        $scope.signOut = function(){
            console.log("in logout service")
            console.log($rootScope.signInResult);
            signInService.signOut($rootScope.signInResult)
            .then(
                    function(response){
                        console.log(response);
                        $rootScope.signOutResult=response;
                        console.log($rootScope.signOutResult);
                        clearCredentials();                                    
                        $rootScope.login='SignedOut';
                        $window.location='/index.html#/landing';
                        },
                    function(err){
                        console.log('error logging out: ', err);
                    }                 
            )
            
        };
        
        var setCredentials = function(email, password) {
            var authdata = base64Service.encode(email + ':' + password);
 
            $rootScope.globals = {
                currentUser: {
                    email: email,
                    authdata: authdata
                }
            };
 
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $cookies.put('globals', $rootScope.globals);
        };
 
        var clearCredentials = function() {
            $rootScope.globals = {};
            $cookies.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic';
        };  
  init();  
}]);