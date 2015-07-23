function ApiService($http) {

	this.http = $http;

	this.BASE_URL = 'http://localhost:3000';

	//DRIBBLE

	var dribble_id = "90ee05c3524236fcffbd4c45112b2533cc451b49c57379513f7692d4bd32b091";
	var dribble_secret = "a1485ab2d3a7ff2cc689700f8bbe53bd97d435a90b3ed322977d529cff3eff01";
	var dribble_access_token = "00e945e8643beb4a86f77ac5ac5af0989d248a81b0608f4706d78db9febdd49c";

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


