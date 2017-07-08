import React from "react";

export class Contact extends React.Component {
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
      <div className="main">
        <p>Drop me a <span className="highlight highlight-pink">Message</span>.</p>
        <p>
          Email me at <a target="_blank" href="mailto:smrkem@gmail.com" className="highlight highlight-blue">smrkem@gmail.com</a>.
          Check out my work on <a target="_blank" className="highlight highlight-green" href="https://github.com/smrkem">Github</a>.
          Connect with me on <a target="_blank" className="highlight highlight-red" href="https://ca.linkedin.com/in/matthew-smrke-55692957">LinkedIn</a>.
        </p>
      </div>
    );
  }
}