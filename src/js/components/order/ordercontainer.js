var OrderList = require('./orderlist');

var OrderContainer = React.createClass({

	getInitialState : function(){
		return { orders: [] }
	},

	render: function () {
		return (
			<OrderList order={this.state.orders} />
		)
	}
});

module.exports = OrderContainer;