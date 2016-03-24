var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = "__change";

module.exports = assign({},EventEmitter.prototype, {
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback)
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback)
	}
});
