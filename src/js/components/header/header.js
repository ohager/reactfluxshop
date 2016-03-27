/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  getInitialState: function () {
    return {};
  },
  render: function () {
    return (
      <div>
        <ul className="horizontal-menu">
          <li><Link to="home">Home</Link></li>
          <li><Link to="products">Product List</Link></li>
          <li><Link to="orders">My Orders</Link></li>
        </ul>
        <br/>
      </div>
    );
  }
});


