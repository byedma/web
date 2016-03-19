appData.service("habitService", function($http, $q){
    var self = this;   

    //List of Habits suggested by experts
    this.habitList = function(){
        var url = "http://localhost:8000/api/v1/habits/";
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

    //Habit Details
    this.habitDetail = function(habitid){
        var url = "http://localhost:8000/api/v1/habits/"+habitid;
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
    
    //Retrieves the list of reviews for a given habit id
    this.habitReviewList = function(habitid){
        console.log(habitid);
        var url = "http://localhost:8000/api/v1/habitreviews/?habit_id="+ habitid;
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

    //retrieves Habit Services for customer's hhProfile
    this.habitServiceList = function(userid){
        console.log(userid);
        var url = "http://localhost:8000/api/v1/habitservices/?user_id="+ userid;
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

    //Customer subscribes to a habit, habit service gets created.
    this.subscribeHabit = function(habitservice){
        var url = "http://localhost:8000/api/v1/new_habitservices/";
        console.log(url);

        var defer = $q.defer();

        $http.post(url, { 
              habit_id: habitservice.habit_id,
              user_id: habitservice.user_id,
              nick_name: habitservice.nick_name,
              status: habitservice.status,
              end_date: habitservice.end_date,}, 
                   {callback:"JSON_CALLBACK", _dont_enforce_csrf_checks:"True"}, {post:{method: "JSONP"}})
            .success(function(response){
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);    
            })
          
          return defer.promise;        
    };

    //Customer unsubscribes a habit, gets removed from hhProfile of the customer.
    this.unsubscribeHabit = function(habitservice){
        console.log(habitservice.id);
        var url = "http://localhost:8000/api/v1/edit_habitservices/"+habitservice.id+"/";
        console.log(url);

        var defer = $q.defer();

        $http.put(url, { 
              status: habitservice.status,
              end_date: habitservice.end_date,}, 
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