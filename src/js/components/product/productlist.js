var React = require('react');
var ProductCard = require('./productcard');


module.exports = React.createClass({

	propTypes : {
		products : React.PropTypes.any,
		onAddProduct : React.PropTypes.func.isRequired
	},

	render: function () {
		return (
			<div>
				{
					_.map(this.props.products,function (product, index) {
						return <ProductCard key={index} product={product} onAddProduct={this.props.onAddProduct}/>
					}.bind(this))
				}
			</div>
		)
	}
});