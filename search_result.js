var SearchResult = React.createClass({
  render: function() {
    var href = "http://www.imdb.com/title/" + this.props.imdb;

    return (
      <div className="searchResult">
        <h3>{this.props.title} ({this.props.year})</h3>
        <a href={href}>{href}</a>
      </div>
    );
  }
});
