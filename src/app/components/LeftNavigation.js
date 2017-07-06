import React from "react";
import { Link } from "react-router";

export class LeftNavigation extends React.Component {
  constructor() {
    super();
    this.state = {
      menuExpanded: false
    }
  }

  onToggleMenu() {
    this.setState({
      menuExpanded: !this.state.menuExpanded
    });
  }

  onPageNav() {
    this.setState({
      menuExpanded: false
    });
  }

  render() {
    var navClasses = "site-nav left-nav";
    if (this.state.menuExpanded) navClasses += " expanded";
    return (
      <nav className={navClasses}>
        <a id="menu-link" onClick={this.onToggleMenu.bind(this)} className="narrow-only nav-link"><span>Menu</span></a>
        <Link to={"/"} id="home-link" onClick={this.onPageNav.bind(this)} className="narrow-only nav-link"><span>Matt Smrke</span></Link>
        <Link to={"/courses"}  id="courses-link" onClick={this.onPageNav.bind(this)} className="nav-link"  activeClassName={"active"}><span>Courses</span></Link>
        <Link to={"/projects"}  id="projects-link" onClick={this.onPageNav.bind(this)} className="nav-link"  activeClassName={"active"}><span>Projects</span></Link>
        <Link to={"/contact"}  id="contact-link" onClick={this.onPageNav.bind(this)} className="nav-link"  activeClassName={"active"}><span>Contact</span></Link>
      </nav>
    );
  }
}
