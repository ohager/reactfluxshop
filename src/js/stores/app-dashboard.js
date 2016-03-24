var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var EventEmitter = require('events').EventEmitter;

var BaseStore = require('../stores/base-store');
var assign = require('object-assign');
var React = require('react/addons');

var CHANGE_EVENT = "change";


var _scheduleList = [
    {id:1, status: 'ok', fullname: 'FullName #1', email: "1@aaa.com"},
    {id:2, status: 'ok', fullname: 'FullName #2', email: "2@aaa.com"},
    {id:3, status: 'ok', fullname: 'FullName #3', email: "3@aaa.com"}
  ];

function _addItem(item){
  console.log("Dashboard");
}

// inheritance by composition - get rid of boilerplate
var AppStore = assign({}, BaseStore, {
  getScheduleList: function(){
    return _scheduleList;
  }
});

AppDispatcher.register(function(payload){
	var action = payload.action; // this is our action from handleViewAction
	switch(action.actionType){
		/* SHORT USAGE BOILERPLATE (EXAMPLE - uncomment if required)
		 case AppConstants.ADD_ITEM:
		 _addItem(payload.action.item);
		 break;
		 */
	}
	AppStore.emitChange();
});

module.exports = AppStore;