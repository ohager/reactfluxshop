/** @jsx React.DOM */
var React = require('react');
var ScheduleList = require('./app-schedulelist');

module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<h1>Dashboard</h1>
				<ScheduleList />
			</div>
		);
	}
});
