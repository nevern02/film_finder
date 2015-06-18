var Spinner = React.createClass({displayName: "Spinner",
  render: function() {
    return (
      React.createElement("div", {className: "spinner"}, 
        React.createElement("div", {className: "double-bounce1"}), 
        React.createElement("div", {className: "double-bounce2"})
      )
    );
  }
});
