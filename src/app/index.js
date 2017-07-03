import React from 'react';
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header siteName="Matt Srke"/>
        <Navigation/>
        <Home name="Karl" initialAge={23} />
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
