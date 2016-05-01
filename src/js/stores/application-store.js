var Constants = require('../constants/constants');
var BaseStore = require('../stores/base-store');
/*
 This store is for application wide state interaction
 */

var _message = "";
var _searchTerm = "";

// inheritance by composition - get rid of boilerplate
var ApplicationStore = _.assign({}, BaseStore, {
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
	ApplicationStore.emitChange();
}

ApplicationStore.dispatchToken = Dispatcher.register(function (action) {
	switch (action.actionType) {
		case Constants.AppAction.RaiseMessage:
			_setMessage(action.message);
			break;
		case Constants.AppAction.Search:
			_search(action.term);
			break;
	}
});

module.exports = ApplicationStore;