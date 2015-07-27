
function SigninCtrl($auth, $http, user, $location) {

	this.auth = $auth; 
	this.location = $location;
	this.loginForm = {};
	this.user = user;
}


angular.module('pandaApp').controller('signinCtrl', SigninCtrl);


SigninCtrl.prototype.login = function() {

	this.user.loginForm = this.loginForm;
	this.user.login();
	this.location.path('/content');

};