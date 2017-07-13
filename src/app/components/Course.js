import React from "react";

export class Course extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="course">
        <div className="course-info">{ this.props.provider }</div>
        <div className="course-main">
          <h3 className="course-title">{ this.props.title }</h3>
        </div>
      </div>
    );
  }
}
