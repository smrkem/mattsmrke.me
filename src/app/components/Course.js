import React from "react";

export class Course extends React.Component {
  render() {
    console.log(this.props);

    var coursePageLink = 'coursePage' in this.props ?
      <a target="_blank" href={this.props.coursePage}>Course Page</a> : "";
    var syllabusLink = 'syllabus' in this.props ?
      <a target="_blank" href={this.props.syllabus}>Syllabus / FAQ</a> : "";
    var certLink = 'certificateUrl' in this.props ?
      <a target="_blank" href={this.props.certificateUrl}>Certificate</a> : "";

    return (
      <div className="course">
        <h3 className="course-title">{ this.props.title }</h3>
        <div className="course-info">
          <span className="course-info-provider-name">{ this.props.provider }</span>
          <a className="course-info-button" onClick={() => this.props.showReview(this.props.index)} >
            <span className="course-info-button-icon"></span>
          </a>
        </div>
        <div className="course-links">
          { coursePageLink }
          { syllabusLink }
          { certLink }
        </div>
      </div>
    );
  }
}
