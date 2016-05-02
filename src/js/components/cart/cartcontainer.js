var ShopStore = require('../../stores/shop-store');
var ShopActions = require('../../actions/shop-actions');
var Cart = require('./cart');

var CartContainer = React.createClass({

	getInitialState : function(){
		return { products: ShopStore.getProductsInCart()}
	},

	onShopChanged : function(){
		this.setState({ products : ShopStore.getProductsInCart()});
	},

	componentWillMount : function(){
		ShopStore.addChangeListener(this.onShopChanged);
	},

	componentWillUnmount : function(){
		ShopStore.removeChangeListener(this.onShopChanged);
	},

	shouldComponentUpdate: function(nextProps, nextState){
		return this.state.products != nextState.products;
	},

	orderCart : function(){
		ShopActions.createOrder()
	},

	render: function () {
		return (
			<Cart products={this.state.products} onOrder={this.orderCart} />
		)
	}
});

module.exports = CartContainer;