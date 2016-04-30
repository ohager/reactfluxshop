/** @jsx React.DOM */
var Constants = require('../constants/constants.js');

module.exports = {
	raiseMessage: function (message) {
		var payload = {
			'actionType': Constants.Action.RaiseMessage,
			'message': message
		};

		Dispatcher.dispatch(payload);

		setTimeout(function(){
			payload.message="";
			Dispatcher.dispatch(payload);
		},3000);
	},

	search : function(searchTerm){

		var payload = {
			'actionType': Constants.Action.Search,
			'term': searchTerm
		};

		Dispatcher.dispatch(payload);
	}

};
