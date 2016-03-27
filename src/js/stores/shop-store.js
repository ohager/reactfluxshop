var Dispatcher = require('../dispatchers/app-dispatcher');
var Constants = require('../constants/constants');
var BaseStore = require('../stores/base-store');
var assign = require('object-assign');
var ShopService = require('../services/shop-service');

var Immutable = require('../../../node_modules/immutable/dist/immutable.min');


// inheritance by composition - get rid of boilerplate
var ShopStore = assign({}, BaseStore, {
	_products : [],

	onLoadProducts : function(){
		ShopService.loadProducts().then(function(products){
			this._products = products;
			this.emitChange();
		}.bind(this));
	},

	getProducts: function(){
		return this._products.slice();
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