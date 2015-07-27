function UserService($auth) {

	this.auth = $auth;
	this.loginForm = {};
	this.registrationForm = {};

}

angular.module('pandaApp').service('user', UserService);


UserService.prototype.login = function() {
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

UserService.prototype.signUp = function() {
	var self = this;
	self.auth.submitRegistration(self.registrationForm)
	.then(function(resp) {
		console.log('successful registration', resp);
      })
	.catch(function(resp) {
        console.log('unsuccessful registration', resp);
      });
};