var app = angular.module('pandaApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/signin', {
		templateUrl: '../templates/signin.html',
		controller: 'signinCtrl as ctrl'
	})
	.when('/signup', {
		templateUrl: '../templates/signup.html',
		controller: 'signupCtrl as ctrl'
	})
	.otherwise({
		redirectTo: '/signin',
	})

});

// app.config(['$httpProvider', function($httpProvider) {
// 	$httpProvider.defaults.useXDomain = true;
// 	delete $httpProvider.defaults.headers.common['X-Requested-With'];
// }
// ]);