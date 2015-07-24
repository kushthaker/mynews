
function ContentCtrl(api, $location, dribble, productHunt, genius) {
   
   //services
   this.api = api;
   this.location = $location;

   //api calls
   this.dribble = dribble;
   this.productHunt = productHunt;
   this.genius = genius;

	this.options = [
	{label: 'Product Hunt', selectedAPI: 0 },
	{label: 'Genius', selectedAPI: 1}
	];

	this.apiOption = this.options[0];

	this.selectedAPI = this.apiOption;

}

angular.module('pandaApp').controller('contentCtrl', ContentCtrl);

ContentCtrl.prototype.saveArticle = function(postTitle, postURL) {

	this.article = { title: postTitle, url: postURL };
	this.api.saveArticle(this.article);
	
};