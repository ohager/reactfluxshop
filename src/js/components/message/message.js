/** @jsx React.DOM */
var Message = React.createClass({

	propTypes : {
		message : React.PropTypes.string.isRequired
	},

	defaultProps : function(){
		return {
			message : null
		}
	},

	render: function () {
		return (
			this.props.message && this.props.message.length > 0 ?
				<div className="toasts">
					<div className="toast">{this.props.message}</div>
				</div>
				: null
		);
	}
});

module.exports = Message;
