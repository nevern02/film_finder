var SearchResult = React.createClass({
  render: function() {
    var href = "http://www.imdb.com/title/" + this.props.imdb;

    return (
      <div className="well searchResult text-center">
        <h4><strong>{this.props.title} ({this.props.year})</strong></h4>
        <a className="btn btn-info" href={href} target="_blank">IMDB</a>
      </div>
    );
  }
});
