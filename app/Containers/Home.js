var React = require("react");

var Search = require("./components/Search");
var Results = require("./components/Results");
var Saves = require("./components/Saves");


var Main = React.createClass({
  getInitialState: function() {
    return {topic:"", startYear: "", endYear: "", Results: [], saves:[]}
  },
  componentDidMount: function() {
    helpers.getStories()
    .then(function(response) {

    })
  }
})
