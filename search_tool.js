var data = [
  {title: 'Transporter 3'},
  {title: 'American Pie'}
];

var SearchTool = React.createClass({
  render: function() {
    return (
      <div className="searchTool">
        <SearchForm />
        <SearchResults results={data}/>
      </div>
    );
  }
});

React.render(
  <SearchTool />,
  document.getElementById("search-tool")
);

