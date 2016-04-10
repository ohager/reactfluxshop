/** @jsx React.DOM */
var React = require('react');
var Header = require('./header/header');

module.exports = React.createClass({
	getInitialState: function () {
		return {message: ""}
	},

	componentWillMount: function () {
	},

	componentWillUnmount: function () {
	},

	render: function () {
		return (
			<div>
				<Header/>
				<div className="grid">
					<div className="grid__cell grid__cell--width-70">
						<div className="container container--large">
						{this.props.children}
						</div>
					</div>
					<div className="grid__cell grid__cell">
						<h3>CartContainer</h3>
					</div>
				</div>
			</div>
		)
	}
});

