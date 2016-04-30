var Constants = require('../constants/constants');
var BaseStore = require('../stores/base-store');
var ShopService = require('../services/shop-service');
var assign = require('object-assign');
var Immutable = require('immutable');


// inheritance by composition - get rid of boilerplate
var ShopStore = assign({}, BaseStore, {
	_products : Immutable.List(),

	onLoadProducts : function(){
		ShopService.loadProducts().then(function(products){
			this._products = Immutable.List(products);
			this.emitChange();
		}.bind(this));
	},

	getProducts: function(){
		return this._products; // is immutable
	}
});
	
ShopStore.dispatchToken = Dispatcher.register(function(payload){
	var action = payload;
	switch(action.actionType){
		 case Constants.Action.LoadProduct:
		 ShopStore.onLoadProducts();
		 break;
	}
});

module.exports = ShopStore;