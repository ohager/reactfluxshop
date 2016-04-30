/** @jsx React.DOM */
var AppActions = require('../../actions/application-actions');

var search = _.debounce(function (term) {
	AppActions.search(term);
}, 500);

var SearchBar = React.createClass({
	getInitialState: function () {
		return {};
	},

	onChange: function (e) {
		search(e.target.value)
	},

	render: function () {
		return (
			<div>
				<input className="field" type="text" onChange={this.onChange} placeholder="What are you looking for?"/>
			</div>
		);
	}
});

module.exports = SearchBar;


