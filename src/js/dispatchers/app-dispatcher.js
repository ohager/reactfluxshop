var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

module.exports = assign(new Dispatcher(), {
	handleAction: function (action) {
		this.dispatch(action);
	}
	// space for extensions
});
