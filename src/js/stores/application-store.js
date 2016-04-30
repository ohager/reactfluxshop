var Constants = require('../constants/constants');
var BaseStore = require('../stores/base-store');
var assign = require('object-assign');

/*
 This store is for application wide state interaction
 */

var _message = "";
var _searchTerm = "";

// inheritance by composition - get rid of boilerplate
var ApplicationStore = assign({}, BaseStore, {
	getMessage: function () {
		return _message;
	},
	getSearchTerm: function () {
		return _searchTerm;
	}
});

function _setMessage(message) {
	_message = message;
	ApplicationStore.emitChange();
}

function _search(term) {
	_searchTerm = term;
	console.log("Searching for :" + term);
	ApplicationStore.emitChange();
}

ApplicationStore.dispatchToken = Dispatcher.register(function (action) {
	switch (action.actionType) {
		case Constants.Action.RaiseMessage:
			_setMessage(action.message);
			break;
		case Constants.Action.Search:
			_search(action.term);
			break;
	}
});

module.exports = ApplicationStore;