var data = [
  {title: 'Transporter 3'},
  {title: 'American Pie'}
];

var SearchTool = React.createClass({
  submitSearch: function(text) {
    console.log("Submitting " + text);
  },
  getInitialState: function() {
    return {results: data};
  },
  render: function() {
    return (
      <div className="searchTool">
        <SearchForm onSubmitSearch={this.submitSearch} />
        <SearchResults results={this.state.results}/>
      </div>
    );
  }
});

React.render(
  <SearchTool />,
  document.getElementById("search-tool")
);

