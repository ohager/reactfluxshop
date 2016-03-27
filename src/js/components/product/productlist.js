var React = require('react');

module.exports = React.createClass({

	propTypes : {
		products : React.PropTypes.any
	},

	render: function () {
		return (
			<ul>
				{
					this.props.products.map(function(product, index)
					{
						return <li key={index}>{product.name}</li>
					})
				}
			</ul>
		)
	}
});