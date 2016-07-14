appData.service("userProfileService", function($http, $q) {
    //self is going to be used when function refers to this.
    var self = this;
    
    this.userDetails = function (userid) {
        var url = "http://localhost:8000/api/v1/users/" + userid +"/";
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
        
    this.updateUser = function (user) {
        
        var url = "http://localhost:8000/api/v1/edit_users/1/";
        console.log(url);

        var defer = $q.defer();

        $http.put(url, { email: user.email,
              first_name: user.first_name,
              middle_name: user.middle_name,
              last_name: user.last_name,
              title: user.title,
              gender: user.gender}, {callback:"JSON_CALLBACK", _dont_enforce_csrf_checks:"True"}, {put:{method: "JSONP"}})
            .success(function(response){
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);    
            })
          
          return defer.promise;
        };  

    this.deleteUser = function (id) {
        
        var url = "http://localhost:8000/api/v1/edit_users/{{id}}/";
        console.log(url);

        var defer = $q.defer();

        $http.put(url, {callback:"JSON_CALLBACK", _dont_enforce_csrf_checks:"True"}, {delete:{method: "JSONP"}})
            .success(function(response){
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);    
            })
          
          return defer.promise;
        };  
    
    this.createUser = function (user) {
        
        var url = "http://localhost:8000/api/v1/users/";
        console.log(url);

        var defer = $q.defer();

        $http.post(url, { 
              first_name: user.first_name,
              middle_name: user.middle_name,
              last_name: user.last_name,
              password: user.password,
              confirm_password: user.confirm_password,
              email: user.email,          
              title: user.title,
              gender: user.gender}, {callback:"JSON_CALLBACK", _dont_enforce_csrf_checks:"True"}, {post:{method: "JSONP"}})
            .success(function(response){
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);    
            })
          
          return defer.promise;
        }; 
    
});