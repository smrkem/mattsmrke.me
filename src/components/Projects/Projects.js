import React from "react"
import Helmet from "react-helmet"
import { Project } from "./Project"

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: this.getProjects(),
      projectIndex: 1,
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
      projectIndex: this.getNextIndex()
    });
  }

  getNextIndex() {
    return this.state.projectIndex == this.state.projects.length ? 1 : this.state.projectIndex + 1;
  }

  render() {
    let projectList = this.getProjects().map((p, ind) => {
      p.ind = ind;
      p.bgColor = this.state.projectColors[(ind % this.state.projectColors.length)];
      return <Project {...p} key={ind} />
    });
    let leftIndex = ((this.state.projectIndex - 1) * -100) + '%';
    let nextProjectName = this.state.projects[this.getNextIndex() - 1].name;
    let styles = {
      left: leftIndex,
      transition: "left .3s ease-out"
    }
    return(
      <div id="main-wr">
        <Helmet>
          <title>My Projects | Matt Smrke - Software Engineer</title>
        </Helmet>
        <div className="projects-next-button" onClick={this.onIndexChange.bind(this)}>
          <span className="black-arrow"></span>
          <div className="next-project-name">
            <div className="inner-name"><span>{ nextProjectName }</span></div>
          </div>
        </div>
        <div id="projects" className="main">
          <div id="projects-scroll" style={{...styles}}>{projectList}</div>
        </div>
      </div>
    );
  }

  getProjects() {
    return [
      {
        name: "NewsPost Classifier: Data Gatherer",
        description: "a serverless React app backed by (python) AWS Lambdas. The user can search a news item and the top 10 recent search results get displayed, ready to be classified as 'spam' or 'good'. Labelled data is sent back to the API and stored in an s3 bucket for future machine learning.",
        technologies: ["Python", "AWS API Gateway, Lambda, S3", "React, Webpack"],
        github_link: "https://github.com/smrkem/stockdata2"
      },
      {
        name: "ServerlessTube",
        description: "a serverless video-sharing application. It has a basic front end that allows users to list and play videos, and authenticate to upload a video for automatic transcoding. This is the course project for the A Cloud Guru: Serverless For Beginners.",
        technologies: ["AWS API Gateway, Lambda, S3, Elastic Transcoder", "Auth0", "Firebase", "jQuery"],
        github_link: "https://github.com/smrkem/cloudguru-serverless-1"
      },
      {
        name: "TrackMe",
        description: "is a self-improvement app that allows you to set up weekly goals and track their completion. It also tracks different personal status attributes over time, such as mindfulness, diet, and physical activity.",
        technologies: ["Ruby on Rails", "AJAX"],
        github_link: "https://github.com/smrkem/trackme",
        live_link: "http://trackme.mattsmrke.me"
      },
      {
        name: "StockData",
        description: "I created this as a personal accounting of my learning process with combining docker, acceptance testing, \"outside-in TDD\" and mocking external services. It gets price history for a stock symbol and displays price and volume for the past year in a github contributions style graph.",
        technologies: ["Python (Flask)", "Python Data Analysis Library (Pandas)", "YahooFinanceAPI"],
        github_link: "https://github.com/smrkem/stockdata"
      }
    ];
  }
}

export default Projects
