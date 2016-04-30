var React = require('react');

var ProductCard = React.createClass({
	propTypes: {
		product : React.PropTypes.shape({
			title: React.PropTypes.string,
			description : React.PropTypes.string,
			img: React.PropTypes.string,
			sku : React.PropTypes.string,
			price : React.PropTypes.number,
			inStock: React.PropTypes.number
		}),
		onAddProduct : React.PropTypes.func.isRequired
	},

	onAddClick : function(){
		this.props.onAddProduct(this.props.product);
	},

	render: function () {
		var product = this.props.product;
		return (
			<div className="card">
				<div className="card__content card__content--divider heading">{product.title}</div>
				<div className="card__content">
					<div className="grid">
						<div className="grid__cell grid__cell--width-20">
							<img className="image" src={product.img}/>
						</div>
						<div className="grid__cell">
							<p className="paragraph">{product.description}</p>
						</div>
					</div>
				</div>
				<div className="card__content card__content--divider">
					<button className="button button--primary" onClick={this.onAddClick}>Add</button>
				</div>
			</div>

		);
	}
});

module.exports = ProductCard;