
function SigninCtrl($auth, $http) {

	this.auth = $auth; 
	this.http = $http;
	this.loginForm = {};
}


angular.module('pandaApp').controller('signinCtrl', SigninCtrl);


SigninCtrl.prototype.login = function() {
	var that = this
	this.auth.submitLogin(this.loginForm)
	.then(function(resp) {
		console.log('successful login', resp);
		that.http.get('http://localhost:3000/users/').success(function(res) {
			console.log(res);
		});
	})
	.catch(function(resp) {
		console.log('unsuccessful login', resp);
	});
};