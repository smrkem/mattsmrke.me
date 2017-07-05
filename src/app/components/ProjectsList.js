import React from "react";
import { Project } from "./Project";

export class ProjectsList extends React.Component {
  constructor() {
    super();
    this.state = {
      project_ind: 1
    }
  }
  render() {
    var projects = this.getProjects();
    var projectList = projects.map((project, i) => {
      return <Project {...project} key={i} />
    });
    return (
      <div className="projects-wr">
        { projectList }
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
