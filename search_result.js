var SearchResult = React.createClass({
  render: function() {
    var href = "http://www.imdb.com/title/" + this.props.imdb;

    return (
      <div className="well searchResult">
        <h4><strong>{this.props.title} ({this.props.year})</strong></h4>
        <a href={href}>{href}</a>
      </div>
    );
  }
});
