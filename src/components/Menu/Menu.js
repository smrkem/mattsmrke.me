import React from "react";
import { NavLink } from "react-router-dom";

export class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    }
  }

  onToggleMenu() {
    this.setState({
      expanded: ! this.state.expanded
    });
  }

  render() {
    return(
      <nav className={ this.state.expanded? "expanded": "" }>
        <a id="menu-link" className="narrow-only" onClick={this.onToggleMenu.bind(this)}>
          <span className="white-arrow"></span>
        </a>
        <NavLink id="home-link" to={"/"} onClick={this.onToggleMenu.bind(this)}><span>Matt Smrke</span></NavLink>
        <NavLink id="courses-link"  to={"/learning"} activeClassName={"active"} onClick={this.onToggleMenu.bind(this)}><span>Learning</span></NavLink>
        <NavLink id="projects-link"  to={"/projects"} activeClassName={"active"} onClick={this.onToggleMenu.bind(this)}><span>Projects</span></NavLink>
        <NavLink id="contact-link"  to={"/contact"} activeClassName={"active"} onClick={this.onToggleMenu.bind(this)}><span>Contact</span></NavLink>
      </nav>
    );
  }
}
