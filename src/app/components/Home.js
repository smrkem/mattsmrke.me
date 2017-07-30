import React from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

export class Home extends React.Component {
  componentDidMount() {
      var highlights = document.getElementsByClassName("highlight");
      var doc = document.getElementById("home");
      Array.from(highlights).forEach((elem) => {
        elem.addEventListener('mouseover', function() {
          this.classList.add("hovered");
          doc.classList.add("faded");
        });
        elem.addEventListener('mouseout', function() {
          this.classList.remove("hovered");
          doc.classList.remove("faded");
        });
      });
    }

  render() {
    return(
      <div id="main-wr">
        <Helmet>
            <title>{ this.props.route.pageTitle }</title>
        </Helmet>
        <div id="home" className="main">
          <div className="main-content">
            <p>
              I'm a web developer in <span className="highlight highlight-green">Toronto</span>, Canada. Currently I'm focused on working with <span className="highlight highlight-red">Ruby on Rails</span> and on learning <span className="highlight highlight-orange">React</span>.  I also work with <span className="highlight highlight-pink">Flask</span> and <span className="highlight highlight-blue">Django</span>, and <span className="highlight highlight-green">python</span> in general.
            </p>
            <p>
              I'm well versed in modern app architecture and feel that front-end frameworks like <span className="highlight highlight-red">React</span> and <span className="highlight highlight-orange">Angular</span> are must-haves<span className="long-dash"></span>especially as <span className="highlight highlight-pink">serverless</span> becomes more popular. I'm a big fan of <span className="highlight highlight-blue">Docker</span>, which has freed me to play around with a variety of languages and frameworks. I write tests for my code and develop using <span className="highlight highlight-green">TDD</span>. Here are some samples of my <Link to={"/projects"} className="highlight highlight-red">projects</Link>.
            </p>
            <p>
              I'm an <span className="highlight highlight-orange">AWS Certified Solutions Architect - Associate</span>. I've recently begun to explore <span className="highlight highlight-pink">AWS services</span> and it's opened up whole new areas for me. It's a natural fit for <span className="highlight highlight-blue">serverless</span> and some of the other things I'm interested in<span className="long-dash"></span>like <span className="highlight highlight-green">data science</span> and <span className="highlight highlight-red">machine learning</span>.
            </p>
            <p>
              I love to learn. I'm a big advocate of online learning through <span className="highlight highlight-orange">open courseware</span><span className="long-dash"></span>it's been a huge win. Here's a list of <Link to={"/courses"} className="highlight highlight-pink">courses</Link> I've completed and am currently taking.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
