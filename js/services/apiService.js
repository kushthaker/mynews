function ApiService($http) {

	this.http = $http;
	this.BASE_URL = 'https://limitless-scrubland-6517.herokuapp.com/';
}

angular.module('pandaApp').service('api', ApiService);



ApiService.prototype.getDribble = function() {

	var self = this;

	return self.http.get(self.BASE_URL + '/api/dribble')
	.then(function(response) {
		console.log("successful dribble call")
		return response.data;
	})
	.catch(function(response) {
		console.log("unsuccessful dribble call")
		return response.data;
	}); 
};

ApiService.prototype.getProductHunt = function() {

	var self = this;

	return self.http.get(self.BASE_URL + '/api/producthunt')
	.then(function(response) {
		console.log("successful producthunt call")
		return response.data;
	})
	.catch(function(response) {
		console.log("unsuccessful producthunt call")
		return response.data;
	}); 
};


ApiService.prototype.getGenius = function(){

	var self = this;

	return self.http.get(self.BASE_URL + '/api/genius')
	.then(function(response) {
		console.log("successful genius call")
		return response.data;
	})
	.catch(function(response) {
		console.log("unsuccessful genius call")
		return response.data;
	}); 
}

ApiService.prototype.getNYTimes = function(){

	var self = this;

	return self.http.get(self.BASE_URL + '/api/nytimes')
	.then(function(response) {
		console.log("successful NYT call")
		return response.data;
	})
	.catch(function(response) {
		console.log("unsuccessful NYT call")
		return response.data;
	}); 
}










