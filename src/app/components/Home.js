import React from "react";
import { Link } from "react-router";

export class Home extends React.Component {
  componentDidMount() {
    $('.highlight').hover(function() {
      $(this).addClass('hovered');
      $(this).closest('.main').addClass('faded');
    }, function() {
      $(this).removeClass('hovered');
      $(this).closest('.main').removeClass('faded');
    });
  }

  render() {
    return (
      <div className="main home">
        <p>
          I'm a web developer in <span className="highlight highlight-green">Toronto</span>, Canada.
          Currently I'm focused on <span className="highlight highlight-red">Ruby on Rails</span> and stay current with <span className="highlight highlight-orange">Python</span>.
          I often use <span className="highlight highlight-pink">Flask</span> and <span className="highlight highlight-blue">Django</span> as well.
          I'm well versed in modern app architecture and feel that front-end frameworks like <span className="highlight highlight-green">React</span> and <span className="highlight highlight-red">Angular</span> are must-haves -- especially as <span className="highlight highlight-orange">serverless</span> becomes more popular.
          I'm a big fan of <span className="highlight highlight-pink">Docker</span>, which has freed me to play around with a variety of languages and frameworks.
          I write tests for all my code and develop using <span className="highlight highlight-blue">TDD</span>.
          Here are some samples of <Link to={"/projects"} className="highlight highlight-green">projects</Link> I've worked on.
        </p>
        <p>
          I'm an <span className="highlight highlight-red">AWS Certified Solutions Architect</span> - Associate, and am at home in the AWS ecosystem.
          I like to play around with <span className="highlight highlight-orange">data science</span> and <span className="highlight highlight-pink">machine learning</span>.
          I'm a big advocate of online learning through <span className="highlight highlight-blue">open courseware</span>. Here's a list of <Link to={"/courses"} className="highlight highlight-green">courses</Link> I've completed and am currently taking.
        </p>
      </div>
    );
  }
}
