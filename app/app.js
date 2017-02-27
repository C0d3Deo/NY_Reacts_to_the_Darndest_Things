var React = reqire("react");
var ReactDOM = require("react-dom");

var Main = require("./components/Main");

ReactDOM.render((
  <Router history={React.browserHistory}>
    <Route path="/" component={Home} />
    <Route path="search" component={Search} />
    <Route path="saves" component={Saves} />
  </Router>),
  document.getElementById("app"));
