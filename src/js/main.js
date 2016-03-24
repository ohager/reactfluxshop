var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var App = require('./components/app');
var About = require('./components/about/app-about');
var Dashboard = require('./components/dashboard/app-dashboard');


var routes = (
  <Route handler={App}>
    <Route name="about" handler={About}/>
    <Route name="dashboard" handler={Dashboard}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
