// global variables for often used objects
window.React = require('react');
window._ = require('lodash');
window.Dispatcher = require('./utils/dispatcher');

var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var RouterHistory = ReactRouter.hashHistory;

var App = require('./components/app');
var ProductContainer = require('./components/product/productcontainer');
var OrderContainer = require('./components/order/ordercontainer');
var Home = require('./components/home');

var router = (
	<Router history={RouterHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="products" component={ProductContainer}/>
			<Route path="orders" component={OrderContainer}/>
		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('app'));
