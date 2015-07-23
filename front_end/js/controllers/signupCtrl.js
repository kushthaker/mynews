
function SignupCtrl($location, api) {

	this.location = $location;   
	this.api = api; 

	this.user = "";
   
}


angular.module('pandaApp').controller('signupCtrl', SignupCtrl);

SignupCtrl.prototype.createUser = function() {

	var self = this;

	self.api.createUser(self.user).then(function(data) {
	})

}