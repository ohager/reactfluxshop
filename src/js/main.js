
var Dispatcher = require('flux').Dispatcher;

// global variables for often used objects
window.React = require('react'); 
window._ = require('lodash');
window.Dispatcher = new Dispatcher();

var Router = require('react-router');
var Route = Router.Route;

var App = require('./components/app');
var ProductContainer = require('./components/product/productcontainer');
var OrderContainer = require('./components/order/ordercontainer');
var Home = require('./components/home');

var routes = (
	<Route handler={App}>
		<Route name="/" handler={Home}/>
		<Route name="home" handler={Home}/>
		<Route name="products" handler={ProductContainer}/>
		<Route name="orders" handler={OrderContainer}/>
	</Route>
);

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.getElementById('app'));
});
