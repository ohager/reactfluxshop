
var ShopStore = require('../../stores/shop-store');
var AppStore = require('../../stores/application-store');
var ShopActions = require('../../actions/shop-actions');
var AppActions = require('../../actions/application-actions');
var ProductList = require('./productlist');


var ProductContainer = React.createClass({

	getInitialState : function(){
		return {products : [], filter: null}
	},

	onProductsChanged : function(){
		var products =  ShopStore.getProducts();
		this.setState( {products : products });
	},

	onSearch : function(){
		this.setState({filter : AppStore.getSearchTerm()});
		ShopActions.loadProducts(this.state.filter);

	},

	componentWillMount : function(){
		ShopStore.addChangeListener(this.onProductsChanged);
		AppStore.addChangeListener(this.onSearch);
		ShopActions.loadProducts();
		ShopActions.loadCart();
	},

	componentWillUnmount : function(){
		ShopStore.removeChangeListener(this.onProductsChanged);
		AppStore.removeChangeListener(this.onSearch);
	},

	onAddProduct : function(product){
		ShopActions.addProductToCart(product);
	},

	render: function () {
		return (
			<ProductList products={this.state.products} onAddProduct={this.onAddProduct}></ProductList>
		);
	}
});

module.exports = ProductContainer;