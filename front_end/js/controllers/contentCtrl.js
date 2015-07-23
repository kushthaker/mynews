
function ContentCtrl(api, dribble, $location, productHunt) {
   
   //services
   this.api = api;
   this.location = $location;

   //api calls
   this.dribble = dribble;
   this.productHunt = productHunt;
   

}

angular.module('pandaApp').controller('contentCtrl', ContentCtrl);