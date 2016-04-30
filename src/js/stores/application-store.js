var Constants = require('../constants/constants');
var BaseStore = require('../stores/base-store');
var assign = require('object-assign');

/*
This store is for application wide state interaction
 */

// inheritance by composition - get rid of boilerplate
var ApplicationStore = assign({}, BaseStore, {
	getMessage: function(){
		return _message;
	}
});

var _message = "";

function _setMessage(message){
 	_message = message;
	ApplicationStore.emitChange();
}


ApplicationStore.dispatchToken = Dispatcher.register(function(action){
	switch(action.actionType){
		 case Constants.Action.RaiseMessage:
		 _setMessage(action.message);
		 break;
	}
});

module.exports = ApplicationStore;