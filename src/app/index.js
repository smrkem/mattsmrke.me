import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Courses } from "./components/Courses";
import { Contact } from "./components/Contact";

class App extends React.Component {
  render() {
    return(
      <Router history={browserHistory} >
        <Route path={"/"} component={Root} >
          <IndexRoute component={Home} />
          <Route path={"courses"} component={Courses} />
          <Route path={"projects"} component={Projects} />
          <Route path={"contact"} component={Contact} />
        </Route>
      </Router>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
