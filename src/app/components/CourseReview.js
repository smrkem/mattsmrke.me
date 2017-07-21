import React from "react";

export class CourseReview extends React.Component {
  render() {
    let course = this.props.course;
    let completionDate = "completionDate" in course ?
      <div id="course-review-completed">
        <h4>Completed</h4>
        <div id="course-review-completed-date">{ course.completionDate }</div>
      </div> : "";
    let classes = "main main-content";
    classes += this.props.showReview ? " opened" : " closed";

    return(
      <div id="course-review-wr" className={classes} >
        <div id="course-review-close" onClick={this.props.closeReview}>
          <span className="close-x"></span>
        </div>
        <div id="course-review-headers">
          <div id="course-review-provider">
            <h4>Provider</h4>
            <div id="course-review-provider-name">{ course.provider }</div>
          </div>
          { completionDate }
        </div>
        <div id="course-review-main">
          <h2 id="course-review-title">{ course.title }</h2>
          <p id="course-review-review">{ course.review }</p>
        </div>
      </div>
    )
  }
}
