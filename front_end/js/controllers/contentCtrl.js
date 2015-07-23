
function ContentCtrl(api) {
   
   this.check = "yeees";
   this.api = api;

}

angular.module('pandaApp').controller('contentCtrl', ContentCtrl);

ContentCtrl.prototype.getDribble = function() {

	var self = this;

	self.api.getDribble().then(function(data) {
		console.log(data);
	})
}

ContentCtrl.prototype.getProductHunt = function() {

	var self = this;

	self.api.getProductHunt().then(function(data) {
		console.log(data);
	})
}