
function SignupCtrl($location, api, $auth) {

	this.api = api;
	this.auth = $auth;
	this.location = $location;
	this.registrationForm = {};

}


angular.module('pandaApp').controller('signupCtrl', SignupCtrl);


SignupCtrl.prototype.signUp = function() {

	var self = this;

	self.auth.submitRegistration(self.registrationForm)
	.then(function(resp) {
		console.log('successful login', resp);
		self.location.path('/content');
      })
	.catch(function(resp) {
        console.log('unsuccessful login', resp);
      });
};