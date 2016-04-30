/** @jsx React.DOM */
var Router = require('react-router');
var Link = Router.Link;
var SearchBar = require('./searchbar');

var Header = React.createClass({
	getInitialState: function () {
		return {};
	},
	render: function () {
		return (
			<div className="grid horizontal-menu">
				<div className="grid__cell">
					<ul>
						<li><Link to="home">Home</Link></li>
						<li><Link to="products">Product List</Link></li>
						<li><Link to="orders">My Orders</Link></li>
					</ul>
				</div>
				<div className="grid__cell">
					<SearchBar/>
				</div>
			</div>
		);
	}
});

module.exports = Header;
