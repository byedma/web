angular.module("appHHProfile").controller("hhprofileController", ['$rootScope', '$scope', '$resource', '$window', 'habitService', 'hobbyService', 'programService', 'challengeService', 'routineService', function($rootScope, $scope, $resource, $window, habitService, hobbyService, programService, challengeService, routineService){
    
    
    $scope.habitServiceList = null;
    $scope.hobbyServiceList = null;
    $scope.programServiceList = null;
    $scope.routineServiceList = null;
    $scope.challengeServiceList = null;
    $scope.eventSources = [];
    
    var init = function(){
        if ($rootScope.login=="Success") 
        {   
            var user_id = $rootScope.signInResult.id;
            $scope.divShow="myHabits";
            $scope.habitServices(user_id); 
        }
        else 
        {   
            $rootScope.redirectFrom = '/hhprofile';
            $rootScope.signInRequiredMessage = 'Dear User, hhProfile feature gives you ability to subscribe and manage features like Routines and Challenges, Please sign-in if you already registered or create a login, it just takes couple of minutes of your valuable time';
            $window.location='#/signin';
        }
        
    }
    
    $scope.loadSubscriptions = function(string){
        hcomponent = string;
        console.log("hcomponent is " + hcomponent);
        var user_id = $rootScope.signInResult.id;
        if (hcomponent == "habit"){
            //$scope.myHabits="true";
            $scope.habitServices(user_id);
            $scope.divShow="myHabits";
        }
        else if(hcomponent == "hobby"){
            //$scope.myHobbys="true";
            $scope.hobbyServices(user_id);
            $scope.divShow="myHobbys";
        } 
        else if(hcomponent == "routine"){
            //$scope.myRoutines="true";
            $scope.routineServices(user_id);
            $scope.divShow="myRoutines";
        }
        else if(hcomponent == "challenge"){
            //$scope.myChallenges="true";
            $scope.challengeServices(user_id);
            $scope.divShow="myChallenges";
        }
        else if(hcomponent == "program"){
            //$scope.myPrograms="true";
            $scope.programServices(user_id);
            $scope.divShow="myPrograms";
        }
        //$window.location='#/hhprofile';
    }
    
    
    //habit services user signed upto
    $scope.habitServices = function(user_id){
            console.log("in habit service list service for the user")
            x = user_id;
            habitService.habitServiceList(x)
            .then(
                    function(response){                        
                        $scope.habitServiceList=response;
                        console.log($scope.habitServiceList);                        
                    },
                    function(err){
                        console.log('error retrieving habit service list: ', err);
                    }                 
            )
            
        }      
    //hobby services user signed upto
    $scope.hobbyServices = function(user_id){
            console.log("in hobby service list service")
            x = user_id;
            hobbyService.hobbyServiceList(x)
            .then(
                    function(response){                        
                        $scope.hobbyServiceList=response;
                        console.log($scope.hobbyServiceList);                        
                    },
                    function(err){
                        console.log('error retrieving hobby services for the user: ', err);
                    }                 
            )
            
        } 
    //routine services user signed upto
    $scope.routineServices = function(user_id){
            console.log("in routine service list service for the user")
            x = user_id;
            routineService.routineServiceList(x)
            .then(
                    function(response){                        
                        $scope.routineServiceList=response;
                        console.log($scope.routineServiceList);                        
                    },
                    function(err){
                        console.log('error retrieving routine service list: ', err);
                    }                 
            )
            
        } 
    //challenge services user signed upto
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
    //program services user signed upto
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
    
    // calendar object 
  
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };
    
    //BMI
    $scope.BMIChartObject = {};
    $scope.BMIChartObject.type = "Gauge";
    $scope.BMIChartObject.options = {
      width: 300,
      height: 300,
      greenFrom: 18.5,
      greenTo: 25,        
      redFrom: 25,
      redTo: 50,
      yellowFrom: 0,
      yellowTo: 18.5,
      minorTicks: 5,
      max: 50
    };
    
    //Cholestrol
    $scope.CholestrolChartObject = {};
    $scope.CholestrolChartObject.type = "Gauge";
    $scope.CholestrolChartObject.options = {
      width: 300,
      height: 300,
      greenFrom: 0,
      greenTo: 190,        
      redFrom: 200,
      redTo: 300,
      yellowFrom: 190,
      yellowTo: 200,
      majorTicks: 20,    
      minorTicks: 5,
      max: 300
    };

    
    $scope.physicalProfile = {};
    $scope.physicalProfile.height = 70;
    $scope.physicalProfile.weight = 74;
    $scope.physicalProfile.cholestrol = 190;
    
    
    $scope.updateAndGetBMI = function(){
                var heightMtrs = $scope.physicalProfile.height * 0.0254;
                console.log("height in meters is " + heightMtrs)
                var BMI = $scope.physicalProfile.weight/(heightMtrs*heightMtrs);
                BMI = Math.round(BMI);
                var TC = $scope.physicalProfile.cholestrol;
                var Cholestrol
                $scope.BMIChartObject.data = [
                    ['Label', 'Value'],
                    ['BMI', BMI],   
                ];
                $scope.CholestrolChartObject.data = [
                    ['Label', 'Value'], 
                    ['Cholestrol', TC]
                ];
        };
    
    init();
}]);