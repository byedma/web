appData.service("challengeService", function($http, $q){
    var self = this;   

    //List of Challenges suggested by experts
    this.challengeList = function(){
        var url = "http://localhost:8000/api/v1/challenges/";
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

    //Retrieves the list of reviews for a given challenge id
    this.challengeReviewList = function(challengeid){
        console.log(challengeid);
        var url = "http://localhost:8000/api/v1/challengereviews/?challenge_id="+ challengeid;
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
    
    //retrieves challenge Services for customer's hhProfile
    this.challengeServiceList = function(userid){
        console.log(userid);
        var url = "http://localhost:8000/api/v1/challengeservices/?user_id="+ userid;
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
    
    //Customer subscribes to a challenge, challenge service gets created.
    this.subscribeChallenge = function(challengeservice){
        var url = "http://localhost:8000/api/v1/challengeservices/";
        console.log(url);

        var defer = $q.defer();

        $http.post(url, { 
              challenge_id: challengeservice.challenge_id,
              user_id: challengeservice.user_id,
              nick_name: challengeservice.nick_name,
              status: challengeservice.status,
              end_date: challengeservice.end_date,}, 
                   {callback:"JSON_CALLBACK", _dont_enforce_csrf_checks:"True"}, {post:{method: "JSONP"}})
            .success(function(response){
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);    
            })
          
          return defer.promise;        
    };
    

    //Customer unsubscribes a challenge, gets removed from hhProfile of the customer.
    this.unsubscribeChallenge = function(challengeservice){
        console.log(challengeservice.id);
        var url = "http://localhost:8000/api/v1/edit_challengeservices/"+challengeservice.id+"/";
        console.log(url);

        var defer = $q.defer();

        $http.put(url, { 
              status: challengeservice.status,
              end_date: challengeservice.end_date,}, 
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