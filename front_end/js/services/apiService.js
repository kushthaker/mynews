function ApiService($http) {

	this.http = $http;

	this.BASE_URL = 'http://localhost:3000';

	//DRIBBLE
	var dribble_id = "90ee05c3524236fcffbd4c45112b2533cc451b49c57379513f7692d4bd32b091";
	var dribble_secret = "a1485ab2d3a7ff2cc689700f8bbe53bd97d435a90b3ed322977d529cff3eff01";
	var dribble_access_token = "00e945e8643beb4a86f77ac5ac5af0989d248a81b0608f4706d78db9febdd49c";

	//PRODUCTHUNT
	var ph_key = "b86f685dec5ff1b2281cb6b6311efc3c1f9d9143913217dbcad9e57f556d0054";
	var ph_secret = "b4d446f8e486b07fbae1ba1c39328ebf0335fe890dbeac4f86515b9ecc5ea7ac";
	var ph_access_token = "ebae349f8b26bb6a695e0aeda41075952142bb869db7c8a89fa7c48630d46988";

	//ANGELIST
	var angel_id = "634f425cbd0c47b0064c9fd7c96d5379938a56bf25f2ab3e"
	var angel_token = "f1dcd8edd61528983f5d585d6cdad59642004700bfd1d47d"

}

angular.module('pandaApp').service('api', ApiService);

ApiService.prototype.createUser = function(userObject) {

	var self = this;

	return self.http.post(self.BASE_URL + '/api/users', {"user": userObject })
	.then(function(response) {
		console.log("user successfully created")
		return response.data;
	})
	.catch(function(response) {
		console.log("unsuccessful user creation")
		return response.data;
	});

};















	// headers: {'Content-Type': 'application/x-www-form-urlencoded'},
 //   transformRequest: function(obj) {
 //       var str = [];
 //       for(var p in obj)
 //       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
 //       return str.join("&");
 //   }

//  (function() {
// 	function ApiService($http) {
// 		this.$http = $http;
// 	}

// 	var BASE_URL = "http://localhost:3000";
// 	var CREATE_ACCOUNT_URL = BASE_URL + "/users"; 

// 	angular.module('ikiApp').service('apiService', ApiService);

// 	ApiService.prototype.createAccount = function(newUsername, newEmail, newPassword) {
// 		var self = this;

// 		// transformRequest uses this function to format the form data prior to sending POST request
// 		var reqFormat = function(obj) {
// 			var str = [];
// 			for (var p in obj) {
// 				if (obj.hasOwnProperty(p)) {
// 					str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
// 				}
// 			}
// 			return str.join("&");
// 		}

// 		var postRequest = {
// 				method: 'POST',
// 				url: CREATE_ACCOUNT_URL,
// 				headers: {
// 					'Content-Type': 'application/x-www-form-urlencoded'
// 				},
// 				transformRequest: reqFormat,
// 				data: {
// 					'user[name]': newUsername,
// 					'user[email]': newEmail,
// 					'user[password]': newPassword
// 				}	
// 			};

// 		return this.$http(postRequest);
// 	}

// })();
