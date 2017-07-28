import React from "react";
import { Link } from "react-router";

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
        <div id="home" className="main">
          <div className="main-content">
            <p>
              I'm a web developer in <span className="highlight highlight-green">Toronto</span>, Canada.
            </p>
            <p>
              Currently I'm focused on working with <span className="highlight highlight-red">Ruby on Rails</span> and on learning <span className="highlight highlight-orange">React</span>.  I also work with <span className="highlight highlight-pink">Flask</span> and <span className="highlight highlight-blue">Django</span>, and <span className="highlight highlight-green">python</span> in general for data science and <span className="highlight highlight-red">AWS lambda</span> functions.
            </p>
            <p>
              I'm well versed in modern app architecture and feel that front-end frameworks like <span className="highlight highlight-orange">React</span> and <span className="highlight highlight-pink">Angular</span> are must-haves<span className="long-dash"></span>especially as <span className="highlight highlight-blue">serverless</span> becomes more popular. I'm a big fan of <span className="highlight highlight-green">Docker</span>, which has freed me to play around with a variety of languages and frameworks. I write tests for my code and develop using <span className="highlight highlight-red">TDD</span>. Here are some samples of my <Link to={"/projects"} className="highlight highlight-orange">projects</Link>.
            </p>
            <p>
              I'm an <span className="highlight highlight-pink">AWS Certified Solutions Architect - Associate</span>. I've recently begun to explore <span className="highlight highlight-blue">AWS services</span> and it's opened up whole new areas for me. It's a natural fit for <span className="highlight highlight-green">serverless</span> and some of the other things I'm interested in<span className="long-dash"></span>like <span className="highlight highlight-red">data science</span> and <span className="highlight highlight-orange">machine learning</span>.
            </p>
            <p>
              I love to learn. I'm a big advocate of online learning through <span className="highlight highlight-pink">open courseware</span><span className="long-dash"></span>it's been a huge win. Here's a list of <Link to={"/courses"} className="highlight highlight-blue">courses</Link> I've completed and am currently taking.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
