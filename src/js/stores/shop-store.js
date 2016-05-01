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
var _filteredProducts = Immutable([]);

// inheritance by composition - get rid of boilerplate
var ShopStore = _.assign({}, BaseStore, {

	onLoadProducts: function (products) {
		_products = Immutable(products);
		this.emitChange();
	},

	onFilterProducts: function(filter){
		var filtered = _products.filter( function(product){
			return product.description.indexOf(filter) >= 0 ||
					product.title.indexOf(filter) >= 0;
		});

		_filteredProducts = Immutable(filtered);
		this.emitChange();
	},

	onAddProductToCart : function(product){
		var mutables = _products.asMutable({deep:true});

		var tocart = _.find(mutables,{'id' : product.id});
		tocart.cart++;

		_products = Immutable(mutables);
		this.emitChange();
	},

	getProducts: function () {
		return _products; // is immutable
	},

	getProductsInCart: function () {
		return Immutable(_products.filter(function(p){
			return p.cart > 0;
		}));
	},

	getFilteredProducts: function(){
		return _filteredProducts;
	}

});

ShopStore.dispatchToken = Dispatcher.register(function (action) {
	switch (action.actionType) {
		case Constants.ShopAction.LoadProducts:
			ShopStore.onLoadProducts(action.products);
			break;
		case Constants.ShopAction.FilterProducts:
			ShopStore.onFilterProducts(action.filter);
			break;
		case Constants.ShopAction.AddProductToCart:
			ShopStore.onAddProductToCart(action.product);
			break;
	}
});

module.exports = ShopStore;