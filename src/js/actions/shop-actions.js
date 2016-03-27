/** @jsx React.DOM */
var Constants = require('../constants/constants.js');
var ShopService = require('../services/shop-service');
var Dispatcher = require('../dispatchers/app-dispatcher');

module.exports = {
	loadProducts: function () {

		var payload = {
			'actionType': Constants.Action.LoadProduct
		};
		Dispatcher.handleAction(payload);
	}
};
