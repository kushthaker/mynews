var app = angular.module('pandaApp', ['ngRoute', 'ng-token-auth', 'angular-loading-bar']);


app.config(function($routeProvider) {
	$routeProvider
	.when('/content', {
		templateUrl: '../templates/content.html',
		controller: 'contentCtrl as ctrl',
		resolve: {
			
			dribble: function(api, $location) {
				return api.getDribble()
				.catch( function (response) {
					console.log('error in dribble call', response);
					$location.path('/content');
				});
			},

			productHunt: function(api, $location) {
				return api.getProductHunt()
				.catch( function (response) {
					console.log('error in producthunt call', response);
					$location.path('/content');
				})
			},

			genius: function(api, $location) {
				return api.getGenius()
				.catch( function (response) {
					console.log('error in genius call', response);
					$location.path('/content');
				})
			},

			nytimes: function(api, $location) {
				return api.getNYTimes()
				.catch( function (response) {
					console.log('error in NYT call', response);
					$location.path('/content');
				})
			}



		}
	})
	.when('/trello', {
		templateUrl: '../templates/trello.html',
		controller: 'trelloCtrl as ctrl',
		resolve: {
			trello_cards: function(api, $location) {
				return api.getTrello()
				.catch( function (response) {
					console.log('error in trello call', response);
					$location.path('/trello');
				})

			}
		}
	})

	.otherwise({
		redirectTo: '/content',
	})

});