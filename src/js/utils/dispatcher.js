/**
 * Created by oliver on 30/04/2016.
 */
var Dispatcher = require('flux').Dispatcher;


var ExtendedDispatcher = _.assign(new Dispatcher(), {
	dispatch: function (action) {
		setTimeout(Dispatcher.prototype.dispatch.bind(this,action), 0);
	}

});

module.exports = ExtendedDispatcher;
