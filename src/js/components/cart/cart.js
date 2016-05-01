var CartItem = require('./cartitem');
var snabbt = require('snabbt.js/snabbt.min');

var Cart = React.createClass({

	propTypes: {
		products: React.PropTypes.array.isRequired
	},

	isEmpty : function(){
		return !this.props.products.length;
	},

	calculateTotal : function(){
		return _.reduce( this.props.products, function(p,c){
			return p + (c.cart * c.price);
		},0).toFixed(2);
	},

	componentDidUpdate : function(){

		if(this.isEmpty()) return;

		var element = this.refs.cart;
		snabbt(element, 'attention', {
			rotation: [0, 0, Math.PI / 8],
			springConstant: 1.9,
			springDeceleration: 0.9
		});
	},


	render: function () {

		var isEmpty = this.isEmpty();
		var total = this.calculateTotal();

		return (
			<div ref="cart" className="card card--higher">
				<div className="card__content card__content--divider heading">
            <span>
                <i className="fa fa-shopping-cart"></i>
                Your Shopping Cart
            </span>
				</div>
				<div className="card__content">
					{ isEmpty ?
						<p className="large-text grey-text center-text">Your cart is empty</p>
						:
						<ul>{
							_.map(this.props.products, function (product, index) {
								return <CartItem key={index} product={product}/>
							})
						}
						</ul>
					}
				</div>
				<div className="card__content card__content--divider">
					<div className="grid">
						<div className="grid__cell grid__cell--width-70">
							<b className="total">Total: $ {total}</b>
						</div>
						<div className="grid__cell right-text">
							{ isEmpty ?
								<button className="button button--secondary">Buy</button> :
								<button className="button" disabled>Buy</button>
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Cart;