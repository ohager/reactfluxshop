
var CartItem = require('./cartitem');

var Cart = React.createClass({

	propTypes : {
		products : React.PropTypes.array.isRequired
	},

	render: function () {

		var isEmpty = !this.props.products.length;
		var total =  0;

		return (
			<div className="card card--higher">
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