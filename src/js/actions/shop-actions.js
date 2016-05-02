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
	loadCart: function () {
		ShopService.loadCart().then(function (productsInCart) {
			Dispatcher.dispatch({
				'actionType': Constants.ShopAction.LoadCart,
				'productsInCart': productsInCart
			});
		}.bind(this));
	},
	addProductToCart : function(product){
		ShopService.addProductToCart(product.id).then(function(productsInCart){

			Dispatcher.dispatch({
				'actionType': Constants.ShopAction.AddProductToCart,
				'productsInCart': productsInCart
			});
		});
	},
	createOrder : function(productsInCart){
		ShopService.createOrder(productsInCart).then(function(orders){
			Dispatcher.dispatch({
				'actionType': Constants.ShopAction.CreateOrder,
				'orders': orders
			})
		})
	}
};
