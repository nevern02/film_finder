var SearchResults = React.createClass({displayName: "SearchResults",
  render: function() {
    var resultList = this.props.results.map(function(film) {
      return (
        React.createElement(SearchResult, {title: film.Title, year: film.Year, imdb: film.imdbID})
      );
    });

    return (
      React.createElement("div", {className: "searchResults"}, 
        resultList
      )
    );
  }
});
