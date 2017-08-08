import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Helmet } from "react-helmet";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Courses } from "./components/Courses";
import { Contact } from "./components/Contact";

class App extends React.Component {

  render() {
    const siteName = "Matt Smrke - Software Engineer";
    return(
      <Router history={browserHistory} >
        <Route path={"/"} component={Root} >
          <IndexRoute
            pageTitle={ siteName }
            component={Home}
          />
          <Route
            path={"courses"}
            pageTitle={ "Courses | " + siteName }
            component={Courses}
          />
          <Route
            path={"projects"}
            pageTitle={ "Projects | " + siteName }
            component={Projects}
          />
          <Route
            path={"contact"}
            pageTitle={ "Contact | " + siteName }
            component={Contact}
          />
        </Route>
      </Router>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
