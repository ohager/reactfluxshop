var React = require('react');
var ShopStore = require('../../stores/shop-store');
var ShopActions = require('../../actions/shop-actions');
var ProductList = require('./productlist');


module.exports = React.createClass({

	getInitialState : function(){
		return {products : []}
	},

	onProductsChanged : function(){
		this.setState( {products : ShopStore.getProducts() });
	},

	componentWillMount : function(){
		ShopStore.addChangeListener(this.onProductsChanged);
		ShopActions.loadProducts();
	},

	componentWillUnmount : function(){
		ShopStore.removeChangeListener(this.onProductsChanged);
	},

	render: function () {
		return (
			<ProductList products={this.state.products}></ProductList>
		);
	}
});