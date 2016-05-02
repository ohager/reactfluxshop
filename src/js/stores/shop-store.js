var Constants = require('../constants/constants');
var BaseStore = require('../stores/base-store');
var Immutable = require('seamless-immutable');

/*
Product Example
 {
 id: 3,
 title: "Fantastic Test Shit",
 price: 124.99,
 stock: 7,
 cart: 0,
 img: 'http://lorempixel.com/200/200/technics?3',
 description: loremIpsum
 }
 */

var _products = Immutable([]);
var _productsInCart = Immutable([]);

// inheritance by composition - get rid of boilerplate
var ShopStore = _.assign({}, BaseStore, {

	updateProducts: function (products) {
		_products = Immutable(products);
		this.emitChange();
	},

	updateCart : function(productsInCart){
		_productsInCart = Immutable(productsInCart);
		this.emitChange();
	},

	getProducts: function () {
		return _products; // is immutable
	},

	getProductsInCart: function () {
		return _productsInCart;
	}
});

ShopStore.dispatchToken = Dispatcher.register(function (action) {
	switch (action.actionType) {
		case Constants.ShopAction.LoadProducts:
			ShopStore.updateProducts(action.products);
			break;
		case Constants.ShopAction.AddProductToCart:
		case Constants.ShopAction.LoadCart:
			ShopStore.updateCart(action.productsInCart);
			break;
	}
});

module.exports = ShopStore;