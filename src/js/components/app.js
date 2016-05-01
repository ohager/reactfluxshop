/** @jsx React.DOM */

var Layout = require('./layout');

var App = React.createClass({
  render: function () {
    return (
      <Layout>
		  {this.props.children}
      </Layout>
    );
  }
});

module.exports = App;







