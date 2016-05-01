/** @jsx React.DOM */
var React = require('react');
var Header = require('./header/header');
var MessageContainer = require('./message/messagecontainer');
var CartContainer = require('./cart/cartcontainer');

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
				<MessageContainer/>
				<div className="body grid">
					<div className="grid__cell grid__cell--width-70">
						<div className="container container--large">
						{this.props.children}
						</div>
					</div>
					<div className="grid__cell grid__cell--width-30 cart">
						<CartContainer/>
					</div>
				</div>
			</div>
		)
	}
});

