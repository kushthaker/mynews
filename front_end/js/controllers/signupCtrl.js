
function SignupCtrl($location, $auth, user) {

	this.location = $location;
	this.auth = $auth;
	this.user = user;
	this.registrationForm = {};

}


angular.module('pandaApp').controller('signupCtrl', SignupCtrl);


SignupCtrl.prototype.signUp = function() {

	this.user.registrationForm = this.registrationForm;
	this.user.signUp();

	this.location.path('/content');

};