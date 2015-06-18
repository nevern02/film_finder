var SearchTool = React.createClass({
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
      <div className="searchTool">
        <div className="row">
          <SearchForm onSubmitSearch={this.submitSearch} class="row" />
        </div>
        {this.state.loading && <Spinner />}
        <SearchResults results={this.state.results}/>
      </div>
    );
  }
});

React.render(
  <SearchTool />,
  document.getElementById("search-tool")
);

