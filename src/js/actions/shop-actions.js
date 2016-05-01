/** @jsx React.DOM */
var Constants = require('../constants/constants.js');
var ShopService = require('../services/shop-service');

module.exports = {
	loadProducts: function () {
		ShopService.loadProducts().then(function (products) {
			Dispatcher.dispatch({
				'actionType': Constants.ShopAction.LoadProducts,
				'products': products
			});
		}.bind(this));
	},
	filterProducts: function (filter) {
		Dispatcher.dispatch({
			'actionType': Constants.ShopAction.FilterProducts,
			'filter': filter
		});
	},
	addProductToCart : function(product){
		Dispatcher.dispatch({
			'actionType': Constants.ShopAction.AddProductToCart,
			'product': product
		});
	}
};
