var SearchTool = React.createClass({displayName: "SearchTool",
  submitSearch: function(text) {
    if (text.length === 0) {
      return;
    }

    ga('send', 'event', 'search', 'typing', text);
    var results = [];
    this.setState({loading: true});

    $.getJSON('http://www.omdbapi.com/?s=' + text, function(data) {
      if (data.Search) {
        results = data.Search
      }
      this.setState({loading: false, results: results});
    }.bind(this));
  },
  getInitialState: function() {
    return {loading: false, results: []};
  },
  render: function() {
    return (
      React.createElement("div", {className: "searchTool"}, 
        React.createElement("div", {className: "row"}, 
          React.createElement(SearchForm, {onSubmitSearch: this.submitSearch, class: "row"})
        ), 
        this.state.loading && React.createElement(Spinner, null), 
        React.createElement(SearchResults, {results: this.state.results})
      )
    );
  }
});

React.render(
  React.createElement(SearchTool, null),
  document.getElementById("search-tool")
);

