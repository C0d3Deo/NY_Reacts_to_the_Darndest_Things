var React = require("react");
var Search = React.createClass({
  getInitialState: function() {
    return {
      topic: "New technology",
      startYear: 2016,
      endYear: 2017
   };
  },

  handleChange: function(event) {
    this.setState({[event.target.name]: event.target.value})
  },
  handleSubmit: function(event) {
    this.props.setTerm(this.state.topic, this.state.startYear, this.state.endYear);
    this.setState({
      topic: "",
      startYear: "",
      endYear: ""
      });
  },
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search Form</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4>
                <strong>Topic</strong>
              </h4>
              <input name="topic" value={this.state.topic} className="form-control text-center" onChange={this.handleChange} required />
            </div>
            <div className="form-group">
              <h4>
                <strong>Start Year</strong>
              </h4>
              <input name="startYear" value={this.state.startYear} className="form-control text-center" onChange={this.handleChange} required />
            </div>
            <div className="form-group">
              <h4>
                <strong>End Year</strong>
              </h4>
              <input name="endYear" value={this.state.endYear} className="form-control text-center" onChange={this.handleChange} required />
            </div>
            <br />
              <button className="btn btn-primary" type="submit" name="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Search;
