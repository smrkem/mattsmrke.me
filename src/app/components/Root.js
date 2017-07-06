import React from "react";

import { LeftNavigation } from "./LeftNavigation";
import { RightNavigation } from "./RightNavigation";

export class Root extends React.Component {
  render() {
    return (
      <div className="app-wr">
        <LeftNavigation/>
        <div className="body-wr">
          {this.props.children}
        </div>
        <RightNavigation/>
      </div>
    );
  }
}
