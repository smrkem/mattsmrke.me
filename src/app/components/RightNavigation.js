import React from "react";
import { Link } from "react-router";

export class RightNavigation extends React.Component {
  render() {
    return(
      <nav className="site-nav right-nav wide-only">
        <Link to={"/"} id="home-link-right" className="mobile-only nav-link"><span>Matt Smrke</span></Link>
      </nav>
    );
  }
}
