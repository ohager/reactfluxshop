var React = require('react');

var CartItem = React.createClass({
	propTypes : {
		product : React.PropTypes.shape({
			id : React.PropTypes.number,
			title: React.PropTypes.string,
			description : React.PropTypes.string,
			img: React.PropTypes.string,
			price : React.PropTypes.number,
			stock: React.PropTypes.number,
			cart: React.PropTypes.number
		})
	},
	
	render: function () {
		var p = this.props.product;
		return (
			<div className="card card">
				<div className="card__item">
					<div className="paragraph">{p.title}</div>
					<div className="paragraph">
						<div className="grid">
							<div className="grid__cell--width-50">$ {p.price}</div>
							<div className="grid__cell--width-50">{p.cart} x</div>
						</div>
					</div>
				</div>
				<div className="card__item">
					<p className="paragraph">$ {p.price * p.cart}</p>
				</div>
			</div>
		);
	}
});

module.exports = CartItem;