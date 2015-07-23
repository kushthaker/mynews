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
	.when('/content', {
		templateUrl: '../templates/content.html',
		controller: 'contentCtrl as ctrl'
	})
	.otherwise({
		redirectTo: '/signin',
	})

});