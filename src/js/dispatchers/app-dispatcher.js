var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

// this dispatcher shows the possibility to switch between actions
// I think this is unnecessary...you may have only one or several dispatchers...
// and not like this
module.exports = assign(new Dispatcher(), {
  handleViewAction: function(action){
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
	
	/*
  handleRequestAction: function(action){
    console.log("*****start handleRequestAction******");
    console.log(action);
    console.log("*****end handleRequestAction******");
    this.dispatch({
      source: 'WEB_API_ACTION',
      action: action
    })
  },
  handleRequestFbOauth: function(action){
    console.log("FACEBOOK handleRequestFbOauth");
    console.log(action);
    console.log("FACEBOOK handleRequestFbOauth");
    this.dispatch({
      source: 'FB_OAUTH_ACTION',
      action: action
    })
  }
  */
});
