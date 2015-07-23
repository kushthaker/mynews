
function SignupCtrl($location, api) {

	this.location = $location;   
	this.api = api; 

	this.user = "";
   
}


angular.module('pandaApp').controller('signupCtrl', SignupCtrl);

SignupCtrl.prototype.createUser = function() {

	var self = this;

	self.user = JSON.stringify(self.user);

	self.api.createUser(self.user).then(function(data) {
		console.log(data);
	})

}