import React from "react";

class Contact extends React.Component {
  componentDidMount() {
    var highlights = document.getElementsByClassName("highlight");
    var doc = document.getElementById("contact");
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
        <div id="contact" className="main main-content">
          <p>Drop me a <span className="highlight highlight-pink">Message</span>.</p>
          <p>
            Email me at <a target="_blank" href="mailto:smrkem@gmail.com" className="highlight highlight-blue">smrkem@gmail.com</a>.
            Check out my work on <a target="_blank" className="highlight highlight-green" href="https://github.com/smrkem">Github</a>.
            Connect with me on <a target="_blank" className="highlight highlight-red" href="https://ca.linkedin.com/in/matthew-smrke-55692957">LinkedIn</a>.
          </p>
        </div>
      </div>
    );
  }
}

export default Contact