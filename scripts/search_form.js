var timeout = null;

var SearchForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
  },
  updateText: function(e) {
    clearTimeout(timeout);

    timeout = setTimeout(function() { 
      var text = React.findDOMNode(this.refs.text).value.trim();
      this.props.onSubmitSearch(text);
    }.bind(this), 1000);
  },
  render: function() {
    return (
      <form className="searchForm form-group" onSubmit={this.handleSubmit}>
        <input className="form-control input-lg" autoFocus type="search" ref="text" onChange={this.updateText} placeholder="Start typing a film name..." />
      </form>
    );
  }
});
