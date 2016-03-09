appData.service("hobbyService", function($http, $q){
    var self = this;   

    //List of hobbys suggested by experts
    this.hobbyList = function(){
        var url = "http://localhost:8000/api/v1/hobbys/";
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
    
    //Retrieves the list of reviews for a given hobby id
    this.hobbyReviewList = function(hobbyid){
        console.log(hobbyid);
        var url = "http://localhost:8000/api/v1/hobbyreviews/?hobby_id="+ hobbyid;
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

    //retrieves Hobby Services for customer's hhProfile
    this.hobbyServiceList = function(userid){
        console.log(userid);
        var url = "http://localhost:8000/api/v1/hobbyservices/?user_id="+ userid;
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

    //Customer subscribes to a hobby, hobby service gets created.
    this.subscribeHobby = function(hobbyservice){
        var url = "http://localhost:8000/api/v1/new_hobbyservices/";
        console.log(url);

        var defer = $q.defer();

        $http.post(url, { 
              hobby_id: hobbyservice.hobby_id,
              user_id: hobbyservice.user_id,
              nick_name: hobbyservice.nick_name,
              status: hobbyservice.status,
              end_date: hobbyservice.end_date,}, 
                   {callback:"JSON_CALLBACK", _dont_enforce_csrf_checks:"True"}, {post:{method: "JSONP"}})
            .success(function(response){
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);    
            })
          
          return defer.promise;        
    };
    

    //Customer unsubscribes a hobby, gets removed from hhProfile of the customer.
    this.unsubscribeHobby = function(hobbyservice){
        console.log(hobbyservice.id);
        var url = "http://localhost:8000/api/v1/edit_hobbyservices/"+hobbyservice.id+"/";
        console.log(url);

        var defer = $q.defer();

        $http.put(url, { 
              status: hobbyservice.status,
              end_date: hobbyservice.end_date,}, 
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