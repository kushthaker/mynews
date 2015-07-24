
function ContentCtrl(api, $location, dribble, productHunt, genius) {
   
   //services
   this.api = api;
   this.location = $location;

   //api calls
   this.dribble = dribble;
   this.productHunt = productHunt;
   this.genius = genius;

	this.options = [
	{label: 'Product Hunt', showAPI: function() {

		return true;

	}},
	{label: 'Genius', showAPI: function() {
		this.showProductHunt = false;
		this.showGenius = true;

		return false;
	}}
	];

	this.apiOption = this.options[0];

}

angular.module('pandaApp').controller('contentCtrl', ContentCtrl);