/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Template = require('./app-template');

module.exports = React.createClass({
  render: function () {
    return (
      <Template>
        <RouteHandler/>
      </Template>
    );
  }
});







