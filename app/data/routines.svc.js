appData.service("routineService", function($http, $q){
    var self = this;   

    //List of routines suggested by experts
    this.routineList = function(){
        var url = "http://localhost:8000/api/v1/routines/";
        console.log(url); 
        var defer = $q.defer();
        $http.get(url, {callback:"JSON_CALLBACK"}, {get:{method: "JSONP"}})
            .success(function(response){
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);    
            })
          
          return defer.promise;        
        
    };
    
    //Retrieves the list of reviews for a given routine id
    this.routineReviewList = function(routineid){
        console.log(routineid);
        var url = "http://localhost:8000/api/v1/routinereviews/?routine_id="+ routineid;
        console.log(url); 
        var defer = $q.defer();
        $http.get(url, {callback:"JSON_CALLBACK"}, {get:{method: "JSONP"}})
            .success(function(response){
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);    
            })
          
          return defer.promise;            
        
    };

    //retrieves Routine Services for customer's hhProfile
    this.routineServiceList = function(userid){
        console.log(userid);
        var url = "http://localhost:8000/api/v1/routineservices/?user_id="+ userid;
        console.log(url); 
        var defer = $q.defer();
        $http.get(url, {callback:"JSON_CALLBACK"}, {get:{method: "JSONP"}})
            .success(function(response){
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);    
            })
          
          return defer.promise;           
        
    };    

    //Customer subscribes to a routine, routine service gets created.
    this.subscribeRoutine = function(routineservice){
        var url = "http://localhost:8000/api/v1/new_routineservices/";
        console.log(url);

        var defer = $q.defer();

        $http.post(url, { 
              routine_id: routineservice.routine_id,
              user_id: routineservice.user_id,
              nick_name: routineservice.nick_name,
              status: routineservice.status,
              end_date: routineservice.end_date,}, 
                   {callback:"JSON_CALLBACK", _dont_enforce_csrf_checks:"True"}, {post:{method: "JSONP"}})
            .success(function(response){
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);    
            })
          
          return defer.promise;        
    };
    

    //Customer unsubscribes a routine, gets removed from hhProfile of the customer.
    this.unsubscribeRoutine = function(routineservice){
        console.log(routineservice.id);
        var url = "http://localhost:8000/api/v1/edit_routineservices/"+routineservice.id+"/";
        console.log(url);

        var defer = $q.defer();

        $http.put(url, { 
              status: routineservice.status,
              end_date: routineservice.end_date,}, 
                  {callback:"JSON_CALLBACK", _dont_enforce_csrf_checks:"True"}, {put:{method: "JSONP"}})
            .success(function(response){
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);    
            })
          
          return defer.promise;
        };         
    
    
});