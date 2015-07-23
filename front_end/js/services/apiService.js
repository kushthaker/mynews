function ApiService($http) {

	this.http = $http;

	this.BASE_URL = 'http://localhost:3000';

}

angular.module('pandaApp').service('api', ApiService);

ApiService.prototype.createUser = function(userObject) {

	var self = this;

	return self.http.post(self.BASE_URL + '/api/users', {user: {userObject} })
	.success(function(response) {
		return response.data;
	});



};