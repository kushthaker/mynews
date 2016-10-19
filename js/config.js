var application_key = '5f49237ee573ef7d61991fe9d65f6ade'
var trello_auth = '8d76d7da8bc5d135a462c6c2027177b8104c70a1e727f7140bc388ced63e1d88'
var feature_board_id = '57bb885c5412df3eb650f926'
var offline_advocacy_card_id = '57bf71a61282a19f973a3d11'
// var sign_up_button_card_id = ''
// var settings_page_update_card_id = ''



console.log('application key: ' + application_key)
console.log('trello auth key: ' + trello_auth)





// https://api.trello.com/1/cards/4eea503d91e31d174600008f?fields=name,idList&member_fields=fullName&key=[application_key]&token=[optional_auth_token]

console.log('https://api.trello.com/1/boards/' + feature_board_id + '/cards?fields=name,idList,url&key=' + application_key + '&token=' + trello_auth)

console.log('https://api.trello.com/1/cards/' + offline_advocacy_card_id + '?fields=name,idList&member_fields=fullName&key=' + application_key + '&token=' + trello_auth)

console.log('https://api.trello.com/1/cards/' + offline_advocacy_card_id + '/membersVoted')




