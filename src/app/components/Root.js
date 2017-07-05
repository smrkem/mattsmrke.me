import React from "react";

import { Navigation } from "./Navigation";

export class Root extends React.Component {
  render() {
    return (
      <div className="app-wr">
        <Navigation/>
        <div className="body-wr">
          {this.props.children}
        </div>
      </div>
    );
  }
}
