function TrelloCtrl(api, $location, trello_cards) {

   //services
   this.api = api;
   this.location = $location;

   //api calls
   this.trello_cards = trello_cards;
}

angular.module('pandaApp').controller('trelloCtrl', TrelloCtrl);
