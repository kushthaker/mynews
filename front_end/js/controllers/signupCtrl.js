
function SignupCtrl($location, api, $auth, user) {

	// Services
	this.api = api;
	this.auth = $auth;
	this.location = $location;
	this.user = user;

	this.registrationForm = this.user.registrationForm;

}


angular.module('pandaApp').controller('signupCtrl', SignupCtrl);


SignupCtrl.prototype.signUp = function() {
	this.user.registrationForm = this.registrationForm;
	this.user.signUp();
};

