import React from "react";
import PropTypes from "prop-types";

export class Project extends React.Component {

  render() {
    console.log(this.props);
    var live_link = "live_link" in this.props ? <a target="_blank" href={this.props.live_link} >Visit it live</a> : "";
    return(
      <div className={"project project-" + this.props.name }>
        <div className="main">
          <div className="project-description">
            <span className="project-title">{ this.props.name }</span><span className="long-dash"></span>&nbsp;
            { this.props.description }
          </div>

          <div className="project-technologies">
            <h3 class="small-heading">Technologies</h3>
            <ul>{ this.props.technologies.map((tech) => {
              return <li>{tech}</li>
            }) }</ul>
          </div>
          <div className="project-links">
            { live_link }
            <h3 class="small-heading">Github</h3>
            <a target="_blank" href={this.props.github_link}>View the code</a>
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.array,
  github_link: PropTypes.string,
  live_link: PropTypes.string
}
