/** @jsx React.DOM */
var AppConstants = require('../constants/constants.js');
var Dispatcher = require('../dispatchers/app-dispatcher');

module.exports = {
	loadSchedule: function () {
		var payload = {
			'actionType': AppConstants.LOAD_SCHEDULE
		};
		Dispatcher.handleViewAction(payload);
	}
};
