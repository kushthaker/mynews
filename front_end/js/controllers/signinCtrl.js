
function SigninCtrl($auth, $http) {

	this.auth = $auth; 
	this.http = $http;
	this.loginForm = {};
}


angular.module('pandaApp').controller('signinCtrl', SigninCtrl);


SigninCtrl.prototype.login = function() {
	var self = this;
	self.auth.submitLogin(self.loginForm)
	.then(function(resp) {
		console.log('successful login', resp);
		self.http.get('http://localhost:3000/users/').success(function(res) {
			console.log(res);
			self.location.path('/content');
		});
	})
	.catch(function(resp) {
		console.log('unsuccessful login', resp);
	});
};