var AppDispatcher = require('../dispatchers/app-dispatcher');
var ActionTypes = require('../constants/actiontypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = "__change";

var _cartItems = [];

function _addItem(item) {
	console.log("ADD ITEM done - just an example");
	alert("ADD ITEM done - just an example - check the console log for an output");
	_cartItems.push(Math.random());
}

/* creating and extending a new eventemitter instance as use for our store */
var AppStore = assign({}, EventEmitter.prototype, {
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback)
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback)
	},
	getCart: function () {
		return _cartItems
	}
});

// map action and store
AppDispatcher.register(function (payload) {
	var action = payload.action;
	switch (action.actionType) {
		case ActionTypes.ADD_ITEM:
			_addItem(payload.action.item);
			break;
	}
	AppStore.emitChange();
});

module.exports = AppStore;