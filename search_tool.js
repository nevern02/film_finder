var SearchTool = React.createClass({
  submitSearch: function(text) {
    $.getJSON('http://www.omdbapi.com/?s=' + text, function(data) {
      this.setState({results: data.Search});
    }.bind(this));
  },
  getInitialState: function() {
    return {results: []};
  },
  render: function() {
    return (
      <div className="searchTool">
        <div className="row">
          <SearchForm onSubmitSearch={this.submitSearch} class="row" />
        </div>
        <SearchResults results={this.state.results}/>
      </div>
    );
  }
});

React.render(
  <SearchTool />,
  document.getElementById("search-tool")
);

