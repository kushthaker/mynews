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
		controller: 'contentCtrl as ctrl',
		resolve: {
			
			dribble: function(api, $location) {
				return api.getDribble()
				.catch( function (response) {
					console.log('error in dribble call', response);
					$location.path('/signin');
				});
			},

			productHunt: function(api, $location) {
					return api.getProductHunt()
					.catch( function (response) {
						console.log('error in producthunt call', response);
						$location.path('/signin');
					})
			},

			genius: function(api, $location) {
					return api.getGenius()
					.catch( function (response) {
						console.log('error in genius call', response);
						$location.path('/signin');
					})
			}


		}
	})
	.otherwise({
		redirectTo: '/signin',
	})

});