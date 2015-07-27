
function ContentCtrl(api, $location, dribble, productHunt, genius) {
   
   //services
   this.api = api;
   this.location = $location;

   //api calls
   this.dribble = dribble;
   this.productHunt = productHunt;
   this.genius = genius;

   //for ng-options to switch between APIs
	this.options = [
	{label: 'Product Hunt', selectedAPI: 0 },
	{label: 'Genius', selectedAPI: 1}
	];

	this.apiOption = this.options[0];
	this.selectedAPI = this.apiOption;

}

angular.module('pandaApp').controller('contentCtrl', ContentCtrl);

ContentCtrl.prototype.saveArticle = function(articleType, postContent, postURL) {

	this.article = { article_type: articleType, content: postContent, url: postURL };
	this.api.saveArticle(this.article);
	
};