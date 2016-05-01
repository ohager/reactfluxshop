/** @jsx React.DOM */
var Constants = require('../constants/constants.js');

module.exports = {
	raiseMessage: function (message) {
		var payload = {
			'actionType': Constants.AppAction.RaiseMessage,
			'message': message
		};

		Dispatcher.dispatch(payload);

		setTimeout(function(){
			payload.message="";
			Dispatcher.dispatch(payload);
		},3000);
	},

	search : function(searchTerm){

		Dispatcher.dispatch({
			'actionType': Constants.AppAction.Search,
			'term': searchTerm
		});
	}

};
