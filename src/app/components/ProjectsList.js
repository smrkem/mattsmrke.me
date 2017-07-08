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
      project_max_height: null,
      projects: this.getProjects(),
      projectColors: [
        "rgb(89, 104, 211)", // blue
        "rgb(70, 170, 160)", // green
        "rgb(217, 65, 59)", // red
        "rgb(247, 177, 65)", // orange
        "rgb(241, 55, 88)" // pink
      ]
    }
  }

  onIndexChange() {
    this.setState({
      project_ind: this.getNextIndex()
    });
  }

  onReportHeight(newHeight) {
    if (newHeight > this.state.project_max_height) {
      this.setState({
        project_max_height: newHeight
      });
    }
  }

  getNextIndex() {
    return this.state.project_ind == this.state.projects.length ? 1 : this.state.project_ind + 1;
  }

  render() {
    var projectList = this.state.projects.map((project, i) => {
      project.height = this.state.project_max_height;
      project.ind = i;
      project.bgColor = this.state.projectColors[(i % this.state.projectColors.length)];
      return <Project {...project} reportHeight={this.onReportHeight.bind(this)} key={i} />
    });
    var leftIndex = ((this.state.project_ind - 1) * -100) + '%';
    var nextProjectName = this.state.projects[this.getNextIndex() - 1].name;
    return (
      <div>
        <div className="projects-wr">
          <div className="projects-scroll" style={{...styles, left: leftIndex}}>{ projectList }</div>
        </div>
        <div className="projects-next-button" onClick={this.onIndexChange.bind(this)}>
          <span className="arrow"></span>
          <p className="next-project-name"><div className="inner-name"><span>{ nextProjectName }</span></div></p>
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
      },
      {
        name: "Sample Project 3",
        description: "is a self-improvement app that allows you to set up weekly goals and track their completion. It also tracks different personal status attributes over time, such as mindfulness, diet, and physical activity.",
        technologies: ["Python (Flask)", "Python Data Analysis Library (Pandas)", "YahooFinanceAPI"],
        github_link: "https://github.com/smrkem/trackme"
      },
      {
        name: "Sample Project 4",
        description: "is a self-improvement app that allows you to set up weekly goals and track their completion. It also tracks different personal status attributes over time, such as mindfulness, diet, and physical activity.",
        technologies: ["Python (Flask)", "Python Data Analysis Library (Pandas)", "YahooFinanceAPI"],
        github_link: "https://github.com/smrkem/trackme"
      },
      {
        name: "Sample Project 5",
        description: "is a self-improvement app that allows you to set up weekly goals and track their completion. It also tracks different personal status attributes over time, such as mindfulness, diet, and physical activity.",
        technologies: ["Python (Flask)", "Python Data Analysis Library (Pandas)", "YahooFinanceAPI"],
        github_link: "https://github.com/smrkem/trackme"
      },
      {
        name: "Sample Project 6",
        description: "is a self-improvement app that allows you to set up weekly goals and track their completion. It also tracks different personal status attributes over time, such as mindfulness, diet, and physical activity.",
        technologies: ["Python (Flask)", "Python Data Analysis Library (Pandas)", "YahooFinanceAPI"],
        github_link: "https://github.com/smrkem/trackme"
      },
      {
        name: "Sample Project 7",
        description: "is a self-improvement app that allows you to set up weekly goals and track their completion. It also tracks different personal status attributes over time, such as mindfulness, diet, and physical activity.",
        technologies: ["Python (Flask)", "Python Data Analysis Library (Pandas)", "YahooFinanceAPI"],
        github_link: "https://github.com/smrkem/trackme"
      },
      {
        name: "Sample Project 8",
        description: "is a self-improvement app that allows you to set up weekly goals and track their completion. It also tracks different personal status attributes over time, such as mindfulness, diet, and physical activity.",
        technologies: ["Python (Flask)", "Python Data Analysis Library (Pandas)", "YahooFinanceAPI"],
        github_link: "https://github.com/smrkem/trackme"
      },
      {
        name: "Sample Project 9",
        description: "is a self-improvement app that allows you to set up weekly goals and track their completion. It also tracks different personal status attributes over time, such as mindfulness, diet, and physical activity.",
        technologies: ["Python (Flask)", "Python Data Analysis Library (Pandas)", "YahooFinanceAPI"],
        github_link: "https://github.com/smrkem/trackme"
      },
      {
        name: "Sample Project 10",
        description: "is a self-improvement app that allows you to set up weekly goals and track their completion. It also tracks different personal status attributes over time, such as mindfulness, diet, and physical activity.",
        technologies: ["Python (Flask)", "Python Data Analysis Library (Pandas)", "YahooFinanceAPI"],
        github_link: "https://github.com/smrkem/trackme"
      },
      {
        name: "Sample Project 11",
        description: "is a self-improvement app that allows you to set up weekly goals and track their completion. It also tracks different personal status attributes over time, such as mindfulness, diet, and physical activity.",
        technologies: ["Python (Flask)", "Python Data Analysis Library (Pandas)", "YahooFinanceAPI"],
        github_link: "https://github.com/smrkem/trackme"
      },
      {
        name: "Sample Project 12",
        description: "is a self-improvement app that allows you to set up weekly goals and track their completion. It also tracks different personal status attributes over time, such as mindfulness, diet, and physical activity.",
        technologies: ["Python (Flask)", "Python Data Analysis Library (Pandas)", "YahooFinanceAPI"],
        github_link: "https://github.com/smrkem/trackme"
      },
      {
        name: "Sample Project 13",
        description: "is a self-improvement app that allows you to set up weekly goals and track their completion. It also tracks different personal status attributes over time, such as mindfulness, diet, and physical activity.",
        technologies: ["Python (Flask)", "Python Data Analysis Library (Pandas)", "YahooFinanceAPI"],
        github_link: "https://github.com/smrkem/trackme"
      },
      {
        name: "Sample Project 14",
        description: "is a self-improvement app that allows you to set up weekly goals and track their completion. It also tracks different personal status attributes over time, such as mindfulness, diet, and physical activity.",
        technologies: ["Python (Flask)", "Python Data Analysis Library (Pandas)", "YahooFinanceAPI"],
        github_link: "https://github.com/smrkem/trackme"
      }
    ]
  }
}
