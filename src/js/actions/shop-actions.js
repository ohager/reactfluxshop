/** @jsx React.DOM */
var Constants = require('../constants/constants.js');

module.exports = {
	loadProducts: function () {

		var payload = {
			'actionType': Constants.Action.LoadProduct
		};
		Dispatcher.dispatch(payload);
	}
};
