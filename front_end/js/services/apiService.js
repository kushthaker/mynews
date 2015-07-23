function ApiService($http) {

	this.http = $http;

	this.BASE_URL = 'http://localhost:3000';

}

angular.module('pandaApp').service('api', ApiService);

ApiService.prototype.createUser = function(userObject) {

	var self = this;

	return self.http.post(self.BASE_URL + '/api/users', {"user": {userObject} })
	.then(function(response) {
		console.log("user successfully created")
		return response.data;
	})
	.catch(function(response) {
		console.log("unsuccessful user creation")
		return response.data;
	});



};