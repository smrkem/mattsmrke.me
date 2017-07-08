import React from "react";
import PropTypes from "prop-types";

export class Project extends React.Component {

  componentDidMount() {
    this.props.reportHeight($(".project-" + this.props.name).height());
  }

  render() {
    var styles = {
      height: this.props.height ? this.props.height : "auto",
      left: (this.props.ind * 100) + '%',
      background: this.props.bgColor
    }
    var projectHeight = this.props.height ? this.props.height : "auto";
    var liveLink = "";
    if ("live_link" in this.props) {
      liveLink = <div className="live-link">
        <h3 className="small-heading">Live</h3>
        <a target="_blank" href={this.props.live_link} >View the app</a>
      </div>;
    }

    return(
      <div className={"project project-" + this.props.name } style={{ ...styles }}>
        <div className="main">
          <p className="project-description">
            <span className="project-title">{ this.props.name }</span><span className="long-dash"></span>&nbsp;
            { this.props.description }
          </p>

          <div className="project-technologies">
            <h3 className="small-heading">Technologies</h3>
            <ul>{ this.props.technologies.map((tech, i) => {
              return <li key={i}><span className="long-dash"></span>{tech}</li>
            }) }</ul>
          </div>

          <div className="project-links">
            <div className="code-link">
              <h3 className="small-heading">Github</h3>
              <a target="_blank" href={this.props.github_link}>View the code</a>
            </div>
            { liveLink }
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
