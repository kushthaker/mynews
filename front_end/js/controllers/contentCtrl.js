
function ContentCtrl(api, dribble, $location, productHunt) {
   
   //services
   this.api = api;
   this.location = $location;
   this.option = "Product Hunt";

   //api calls
   this.dribble = dribble;
   this.productHunt = productHunt;

}

angular.module('pandaApp').controller('contentCtrl', ContentCtrl);

// ContentCtrl.prototype.loadAPIs = function() {

// 	this.api.option = this.option;

// 	this.location.path('/content');

// };