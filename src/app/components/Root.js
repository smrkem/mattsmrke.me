import React from "react";
import { Menu } from "./Menu";

export class Root extends React.Component {
  render() {
    return(
      <div>
        <Menu />
        {this.props.children}
      </div>
    );
  }
}
