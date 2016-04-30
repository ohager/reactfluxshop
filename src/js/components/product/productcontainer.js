
var ShopStore = require('../../stores/shop-store');
var ShopActions = require('../../actions/shop-actions');
var AppActions = require('../../actions/application-actions');
var ProductList = require('./productlist');


var ProductContainer = React.createClass({

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

	onAddProduct : function(product){
		AppActions.raiseMessage("Added Product");
	},

	render: function () {
		return (
			<ProductList products={this.state.products} onAddProduct={this.onAddProduct}></ProductList>
		);
	}
});

module.exports = ProductContainer;