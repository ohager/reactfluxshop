/** @jsx React.DOM */
var AppConstants = require('../constants/constants.js');
var Dispatcher = require('../dispatchers/app-dispatcher');

module.exports = {
	raiseMessage: function (message) {
		var payload = {
			'actionType': AppConstants.RAISE_MESSAGE,
			'message': message
		};

		Dispatcher.handleMessageAction(payload);

	}
};
