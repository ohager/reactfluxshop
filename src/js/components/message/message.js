/** @jsx React.DOM */
var snabbt = require('snabbt.js/snabbt.min');

var Message = React.createClass({

	propTypes: {
		message: React.PropTypes.string.isRequired
	},

	defaultProps: function () {
		return {
			message: null
		}
	},

	componentDidUpdate : function(){

		if(!this.refs.message) return;

		var element = this.refs.message;

		snabbt(element, {
			fromOpacity : 0,
			opacity: 0.8,
			easing: 'ease',
			duration: 125
		}).snabbt({
			fromPosition: [-10, 0, 0],
			easing: 'spring',
			springConstant: 1.9,
			springDeceleration: 0.9,
			springMass: 10
		}).snabbt({
			opacity: 0.0,
			easing: 'ease',
			duration: 125
		});

		/*
		snabbt(element, 'attention', {
			position: [50, 0, 0],
			springConstant: 2.4,
			springDeceleration: 0.9
		});
		*/
	},

	render: function () {
		return (
			this.props.message && this.props.message.length > 0 ?
				<div ref="message" className="toasts-container">
					<div className="toasts toasts--topcenter">
						<div className="toast toast--success">{this.props.message}</div>
					</div>
				</div>
				: null
		);
	}
});

module.exports = Message;
