var React = require('react');
var ProductCard = require('./productcard');


module.exports = React.createClass({

	propTypes : {
		products : React.PropTypes.any
	},

	render: function () {
		return (
			<div>
				{
					this.props.products.map(function (product, index) {
						return <ProductCard key={index} product={product}/>
					})
				}
			</div>
		)
	}
});