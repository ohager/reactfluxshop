/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({

	propTypes : {
		message : React.PropTypes.string.required
	},

	render: function () {
		return (
			<div>
				<h4>{this.props.message}</h4>
			</div>
		);
	}
});


