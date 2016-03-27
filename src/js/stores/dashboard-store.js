
var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/constants');

var BaseStore = require('../stores/base-store');
var assign = require('object-assign');

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
var DashboardStore = assign({}, BaseStore, {
  getScheduleList: function(){
    return _scheduleList;
  }
});

DashboardStore.dispatchToken = AppDispatcher.register(function(payload){
	var action = payload.action; // this is our action from handleViewAction
	switch(action.actionType){
		 case AppConstants.LOAD_SCHEDULE:
			 DashboardStore.emitChange();
		 break;
	}
});

module.exports = DashboardStore;