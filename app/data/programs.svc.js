appData.service("programService", function($http, $q){
    var self = this;   

    //List of Programs suggested by experts
    this.programList = function(){
        var url = "http://localhost:8000/api/v1/programs/";
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

    //Retrieves the list of reviews for a given program id
    this.programReviewList = function(programid){
        console.log(programid);
        var url = "http://localhost:8000/api/v1/programreviews/?program_id="+ programid;
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
    
    //retrieves program Services for customer's hhProfile
    this.programServiceList = function(userid){
        console.log(userid);
        var url = "http://localhost:8000/api/v1/programservices/?user_id="+ userid;
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
    
    //Customer subscribes to a program, program service gets created.
    this.subscribeProgram = function(programservice){
        var url = "http://localhost:8000/api/v1/programservices/";
        console.log(url);

        var defer = $q.defer();

        $http.post(url, { 
              program_id: programservice.program_id,
              user_id: programservice.user_id,
              nick_name: programservice.nick_name,
              status: programservice.status,
              end_date: programservice.end_date,}, 
                   {callback:"JSON_CALLBACK", _dont_enforce_csrf_checks:"True"}, {post:{method: "JSONP"}})
            .success(function(response){
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);    
            })
          
          return defer.promise;        
    };
    

    //Customer unsubscribes a program, gets removed from hhProfile of the customer.
    this.unsubscribeProgram = function(programservice){
        console.log(programservice.id);
        var url = "http://localhost:8000/api/v1/edit_programservices/"+programservice.id+"/";
        console.log(url);

        var defer = $q.defer();

        $http.put(url, { 
              status: programservice.status,
              end_date: programservice.end_date,}, 
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