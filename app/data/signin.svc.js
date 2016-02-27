appData.service("signInService", function($http, $q) { 

    this.signIn = function (signin) {
        
        var url = "http://localhost:8000/api/v1/login/";
        console.log(url);
        console.log(signin)
        var defer = $q.defer();

        $http.post(url, { 
              email: signin.email,
              password: signin.password}, 
                   {callback:"JSON_CALLBACK", _dont_enforce_csrf_checks:"True"}, {post:{method: "JSONP"}})
            .success(function(response){            
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);    
            })
          
          return defer.promise;
        };  

    this.signOut = function () {
        
        var url = "http://localhost:8000/api/v1/logout/";
        console.log(url);

        var defer = $q.defer();

        $http.delete(url,  
                   {callback:"JSON_CALLBACK", _dont_enforce_csrf_checks:"True"}, {post:{method: "JSONP"}})
            .success(function(response){
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);    
            })
          
          return defer.promise;
        }; 

});