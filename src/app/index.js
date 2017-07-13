import React from 'react';
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { ProjectsList } from "./components/ProjectsList";
import { CoursesList } from "./components/CoursesList";
import { Contact } from "./components/Contact";

import "../assets/main.js";

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root}>
          <IndexRoute component={Home} />
          <Route path={"courses"} component={CoursesList} />
          <Route path={"projects"} component={ProjectsList} />
          <Route path={"contact"} component={Contact} />
        </Route>
      </Router>
    );
  }

}

render(<App/>, window.document.getElementById("app"));
