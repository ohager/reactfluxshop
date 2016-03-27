var Dispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/constants');
var BaseStore = require('../stores/base-store');
var assign = require('object-assign');

// inheritance by composition - get rid of boilerplate
var MessageStore = assign({}, BaseStore, {
	getMessage: function(){
		return _message;
	}
});

var _message = "";

function _setMessage(message){
 	_message = message;
	MessageStore.emitChange();
}


MessageStore.dispatchToken = Dispatcher.register(function(payload){
	var action = payload.action;
	switch(action.actionType){
		 case AppConstants.RAISE_MESSAGE:
		 _setMessage(payload.action.message);
		 break;
	}
});

module.exports = MessageStore;