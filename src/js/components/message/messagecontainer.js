var AppStore = require('../../stores/application-store');
var Message = require('./message');

var MessageContainer = React.createClass({

	getInitialState : function(){
		return {message : ""}
	},

	onMessageRaised : function(){
		this.setState( {message: AppStore.getMessage() });
	},

	componentWillMount : function(){
		AppStore.addChangeListener(this.onMessageRaised);
	},

	componentWillUnmount : function(){
		AppStore.removeChangeListener(this.onMessageRaised);
	},

	render: function () {
		return (
			<Message message={this.state.message} />
		);
	}
});

module.exports = MessageContainer;