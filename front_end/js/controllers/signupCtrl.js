
function SignupCtrl($location, api, $auth) {

	this.api = api;
	this.auth = $auth;
	this.registrationForm = {};

}


angular.module('pandaApp').controller('signupCtrl', SignupCtrl);


SignupCtrl.prototype.signUp = function() {

	this.auth.submitRegistration(this.registrationForm)
	.then(function(resp) {
		console.log('successful login', resp);
      })
	.catch(function(resp) {
        console.log('unsuccessful login', resp);
      });
};