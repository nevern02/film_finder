var SearchResult = React.createClass({displayName: "SearchResult",
  render: function() {
    var href = "http://www.imdb.com/title/" + this.props.imdb;

    return (
      React.createElement("div", {className: "well searchResult text-center"}, 
        React.createElement("h4", null, React.createElement("strong", null, this.props.title, " (", this.props.year, ")")), 
        React.createElement("a", {className: "btn btn-info", href: href, target: "_blank"}, "IMDB")
      )
    );
  }
});
