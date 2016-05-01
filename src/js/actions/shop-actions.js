/** @jsx React.DOM */
var Constants = require('../constants/constants.js');
var ShopService = require('../services/shop-service');

module.exports = {
	loadProducts: function (filter) {
		ShopService.loadProducts(filter).then(function (products) {
			Dispatcher.dispatch({
				'actionType': Constants.ShopAction.LoadProducts,
				'products': products
			});
		}.bind(this));
	},
	addProductToCart : function(product){
		Dispatcher.dispatch({
			'actionType': Constants.ShopAction.AddProductToCart,
			'product': product
		});
	}
};
