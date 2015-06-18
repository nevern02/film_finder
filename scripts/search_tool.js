var SearchTool = React.createClass({
  submitSearch: function(text) {
    this.setState({loading: true});

    $.getJSON('http://www.omdbapi.com/?s=' + text, function(data) {
      this.setState({loading: false, results: data.Search});
      ga('send', 'event', 'search', 'typing', text);
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

