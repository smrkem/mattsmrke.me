import React from "react";
import { Project } from "./Project";

const styles = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  transition: 'all .3s ease-out'
}
export class ProjectsList extends React.Component {
  constructor() {
    super();
    this.state = {
      project_ind: 1,
      projects: this.getProjects()
    }
  }

  onIndexChange() {
    this.setState({
      project_ind: this.getNextIndex()
    });
  }

  getNextIndex() {
    return this.state.project_ind == this.state.projects.length ? 1 : this.state.project_ind + 1;
  }

  render() {
    var projectList = this.state.projects.map((project, i) => {
      return <Project {...project} key={i} />
    });
    var leftIndex = ((this.state.project_ind - 1) * -100) + '%';
    var nextProjectName = this.state.projects[this.getNextIndex() - 1].name;
    return (
      <div className="projects-wr">
        <div className="projects-scroll" style={{...styles, left: leftIndex}}>{ projectList }</div>
        <div className="projects-next-button" onClick={this.onIndexChange.bind(this)}>
          <span className="next-project-name">{ nextProjectName }</span>
          <span className="next-project-arrow-wr"><span className="next-project-arrow">></span></span>
        </div>
      </div>
    );
  }

  getProjects() {
    return [
      {
        name: "TrackMe",
        description: "is a self-improvement app that allows you to set up weekly goals and track their completion. It also tracks different personal status attributes over time, such as mindfulness, diet, and physical activity.",
        technologies: ["Ruby on Rails", "AJAX"],
        github_link: "https://github.com/smrkem/trackme",
        live_link: "http://trackme.mattsmrke.me"
      },
      {
        name: "StockData",
        description: "is a self-improvement app that allows you to set up weekly goals and track their completion. It also tracks different personal status attributes over time, such as mindfulness, diet, and physical activity.",
        technologies: ["Python (Flask)", "Python Data Analysis Library (Pandas)", "YahooFinanceAPI"],
        github_link: "https://github.com/smrkem/trackme"
      }
    ]
  }
}
