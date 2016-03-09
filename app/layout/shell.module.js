var appShell = angular.module('appShell', ['ngRoute']);

appShell.config(function ($routeProvider) {

        
        $routeProvider
        
        .when('/signin', {
        
            templateUrl: 'app/signin/signin.html',
            controller: 'signInController'

        })    
        .when('/landing', {
        
            templateUrl: 'app/landing/landing.html',
            controller: 'landingController'

        })
        .when('/search', {
        
            templateUrl: 'app/search/search.html',
            controller: 'searchController'

        })
        .when('/habit', {
        
            templateUrl: 'app/habit/habit.html',
            controller: 'habitController'

        })

        .when('/hobby', {
        
            templateUrl: 'app/hobby/hobby.html',
            controller: 'hobbyController'

        })
        .when('/challenge', {
        
            templateUrl: 'app/challenge/challenge.html',
            controller: 'challengeController'

        })
        .when('/routine', {
        
            templateUrl: 'app/routine/routine.html',
            controller: 'routineController'

        })
        .when('/program', {
        
            templateUrl: 'app/program/program.html',
            controller: 'programController'

        })
        .when('/profile', {
        
            templateUrl: 'app/profile/profile.html',
            controller: 'profileController'
        
        })
        
        .when('/register', {
        
            templateUrl: 'app/profile/register.html',
            controller: 'profileController'
            
        })

        .when('/hhprofile', {
        
            templateUrl: 'app/hhprofile/hhprofile.html',
            controller: 'hhprofileController'
            
        })
        
        .otherwise({
        redirectTo: "/landing"
        
    })

});
