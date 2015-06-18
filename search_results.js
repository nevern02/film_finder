var SearchResults = React.createClass({
  render: function() {
    var resultList = this.props.results.map(function(film) {
      return (
        <SearchResult title={film.title} />
      );
    });

    return (
      <div className="searchResults">
        {resultList}
      </div>
    );
  }
});
