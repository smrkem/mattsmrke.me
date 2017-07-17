import React from "react";

export class Project extends React.Component {
  render() {
    console.log(this.props);
    let styles = {
      left: (this.props.ind * 100) + '%',
      background: this.props.bgColor
    }
    let liveLink = "";
    if ("live_link" in this.props) {
      liveLink = <div className="live-link">
        <h3 className="small-heading">Live</h3>
        <a target="_blank" href={this.props.live_link} >View the app</a>
      </div>;
    }

    return (
      <div className="project main-content" style={{...styles}}>

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
    );
  }
}
