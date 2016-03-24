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
        <ul className="nav nav-tabs">
          <li><Link to="about">About</Link></li>
          <li><Link to="dashboard">Schedule Dashboard</Link></li>
        </ul>
        <br/>
      </div>
    );
  }
});


