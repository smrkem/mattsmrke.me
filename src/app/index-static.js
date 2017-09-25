import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter, Route, BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Helmet } from "react-helmet";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Courses } from "./components/Courses";
import { Contact } from "./components/Contact";


// const Routes = (
//     <Route path={"/"} component={Root} >
//       <IndexRoute
//         pageTitle={ siteName }
//         component={Home}
//       />
//       <Route
//         path={"courses"}
//         pageTitle={ "Courses | " + siteName }
//         component={Courses}
//       />
//       <Route
//         path={"projects"}
//         pageTitle={ "Projects | " + siteName }
//         component={Projects}
//       />
//       <Route
//         path={"contact"}
//         pageTitle={ "Contact | " + siteName }
//         component={Contact}
//       />
//     </Route>
// )

const Routes = (
    <div>
        <Route
            path={"/"} exact
            component={Home}
          />
        <Route
            path={"courses"}
            component={Courses}
          />
    </div>
)

const Html = props => (
    <html>
        <head><title>Mattsmrke Static!!</title></head>
        <body>
            <div id="app">
                {props.children}
            </div>
            <script src="/index.js"></script>
        </body>
    </html>
)
    
export default locals => {
    
    return ReactDOMServer.renderToString(
        <StaticRouter location={locals.path} context={{}}>
            <Html>{Routes}</Html>
        </StaticRouter>
    )
}


if (typeof document != 'undefined') {
  ReactDOM.render(
    <BrowserRouter>{Routes}</BrowserRouter>,
    document.getElementById('app')
  )
}

