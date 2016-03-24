/** @jsx React.DOM */
var React = require('react');
var DashboardStore = require('../../stores/app-dashboard.js');

function getScheduleList() {
  return {scheduleList: DashboardStore.getScheduleList()}
}

module.exports = React.createClass({
  getInitialState: function() {
    return getScheduleList();
  },
  render: function () {
    var scheduleListItems = this.state.scheduleList.map(function(item,i){
      return <tr key={i}><td>{item.status}</td><td>{item.fullname}</td><td>{item.email}</td></tr>
    });
    return (
      <div>
      
        <table className="table table-striped table-hover">
        <thead>
          <tr><th>Status</th><th>Fullname</th><th>Email</th></tr>
        </thead>
        <tbody>
        {scheduleListItems}
        </tbody>
        </table>
      </div>
    );
  }
});