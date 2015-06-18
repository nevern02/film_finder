var SearchResults = React.createClass({
  render: function() {
    var resultList = this.props.results.map(function(film) {
      return (
        <SearchResult title={film.Title} year={film.Year} imdb={film.imdbID} />
      );
    });

    return (
      <div className="searchResults">
        {resultList}
      </div>
    );
  }
});
