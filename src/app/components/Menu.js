import React from "react";
import { Link } from "react-router";

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
        <Link id="home-link" to={"/"} onClick={this.onToggleMenu.bind(this)}><span>Matt Smrke</span></Link>
        <Link id="courses-link"  to={"/courses"} activeClassName={"active"} onClick={this.onToggleMenu.bind(this)}><span>Courses</span></Link>
        <Link id="projects-link"  to={"/projects"} activeClassName={"active"} onClick={this.onToggleMenu.bind(this)}><span>Projects</span></Link>
        <Link id="contact-link"  to={"/contact"} activeClassName={"active"} onClick={this.onToggleMenu.bind(this)}><span>Contact</span></Link>
      </nav>
    );
  }
}
