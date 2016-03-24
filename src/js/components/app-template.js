/** @jsx React.DOM */
var React = require('react');
var Header = require('./header/app-header');


module.exports = React.createClass({
	render: function () {
		return (
			<div className="container">
				<Header />
				{this.props.children}
			</div>
		)
	}
});

