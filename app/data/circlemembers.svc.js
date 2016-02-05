appData.service("circleMemberService", function($http, $q) {
    //self is going to be used when function refers to this.
    var self = this;
    
    this.circleMemberList = function (circleId) {
        console.log(circleId)
        var url = "http://localhost:8000/api/v1/circlemembers/";
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
    
    this.createCircleMember = function (circleMember) {
        
        var url = "http://localhost:8000/api/v1/circlemembers/";
        console.log(url);

        var defer = $q.defer();

        $http.post(url, { 
              email: circleMember.email,
              first_name: circleMember.first_name,
              last_name: circleMember.last_name,
              status: circleMember.status,
              role: circleMember.role,
              circle_id: circleMember.circle_id,
              invited_by: circleMember.invited_by}, 
                   {callback:"JSON_CALLBACK", _dont_enforce_csrf_checks:"True"}, {post:{method: "JSONP"}})
            .success(function(response){
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);    
            })
          
          return defer.promise;
        }; 
    
    this.deleteCircleMember = function (circleMemberId) {
        console.log(circleMemberId)
        var url = "http://localhost:8000/api/v1/edit_circlemembers/" + circleMemberId +"/";
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

    this.updateCircleMember = function (circleMember, circleMemberId) {
        
        var url = "http://localhost:8000/api/v1/edit_circlemembers/" + circleMemberId +"/";
        console.log(url);

        var defer = $q.defer();

        $http.put(url, { 
              email: circleMember.email,
              first_name: circleMember.first_name,
              last_name: circleMember.last_name, 
              role: circleMember.role}, 
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