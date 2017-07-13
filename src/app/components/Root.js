import React from "react";

export class Root extends React.Component {
  render() {
    return(
      <div className="main-wr">{this.props.children}</div>
    );    
  }
}
