appData.service("circleService", function($http, $q) {
    //self is going to be used when function refers to this.
    var self = this;
    
    this.circleList = function () {
        var url = "http://localhost:8000/api/v1/circles/";
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
    
    this.getCircleDetails = function (circleid) {
        var url = "http://localhost:8000/api/v1/circles/{{circleid}}/";
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
        
    this.updateCircle = function (circle) {
        
        var url = "http://localhost:8000/api/v1/edit_circles/1/";
        console.log(url);

        var defer = $q.defer();

        $http.put(url, { 
              name: circle.name,
              description: circle.description,
              status: circle.status,
              members_can_refer: circle.members_can_refer,
              max_number_members: circle.max_number_members}, 
                  {callback:"JSON_CALLBACK", _dont_enforce_csrf_checks:"True"}, {put:{method: "JSONP"}})
            .success(function(response){
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);    
            })
          
          return defer.promise;
        };  
 
    this.deleteCircle = function (circleid) {
        console.log(circleid)
        var url = "http://localhost:8000/api/v1/edit_circles/" + circleid +"/";
        console.log(url);

        var defer = $q.defer();

        $http.delete(url, 
                  {callback:"JSON_CALLBACK", _dont_enforce_csrf_checks:"True"}, {delete:{method: "JSONP"}})
            .success(function(response){
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);    
            })
          
          return defer.promise;
        };    
    
    
    this.createCircle = function (circle) {
        
        var url = "http://localhost:8000/api/v1/circles/";
        console.log(url);

        var defer = $q.defer();

        $http.post(url, { 
              name: circle.name,
              description: circle.description,
              status: circle.status,
              created_by: circle.created_by,
              members_can_refer: circle.members_can_refer,
              max_number_members: circle.max_number_members}, 
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