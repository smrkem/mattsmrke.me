import React from "react";
import { Course } from "./Course";
import { CourseReview } from "./CourseReview";

export class Courses extends React.Component {
  constructor() {
    super();
    this.state = {
      courses: this.getCourses(),
      reviewIndex: 1,
      showReview: false
    }
  }

  onShowReview(index) {
    this.setState({
      showReview: true,
      reviewIndex: index
    });
  }

  onHideReview(index) {
    this.setState({
      showReview: false,
    });
  }

  render() {
    let coursesList = this.state.courses.map((course, i) => {
      course.index = i;
      return <Course {...course} key={i} showReview={this.onShowReview.bind(this)} />
    });
    return(
      <div id="main-wr">
        <div id="courses" className="main main-content">
          { coursesList }
        </div>
        <CourseReview
          showReview={this.state.showReview}
          course={this.state.courses[this.state.reviewIndex]}
          closeReview={this.onHideReview.bind(this)}
        />
      </div>
    );
  }

  getCourses() {
    return [
      {
        title: "Angular 2 + Rails 5 Bootcamp",
        status: "in-progress",
        provider: "Udemy",
        coursePage: "https://www.udemy.com/angular-on-rails-course",
        review: "A fast-paced walkthrough for an Angular app that communicates with 2 different Rails API services. This course doesn't teach anything about Rails - it's only used to scaffold the APIs for the Angualr app. Not a bad introduction to Angular - but I found I had to constantly google for updated code as well as clearer explanations of the Angular concepts.",
      },
      {
        title: "AWS Certified Solutions Architect",
        status: "completed",
        provider: "A Cloud Guru",
        coursePage: "https://acloud.guru/course/aws-certified-solutions-architect-associate",
        completionDate: "May 2017",
        certificateUrl: "https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2017-05-26&ci=AWS00273599",
        review: "A great introduction to AWS services and information about the AWS exams and certification process. The course gives a good overview of the relevant AWS services, and is followed up with hands-on labs and practice exams. While this course, on its own, is probably not enough to pass the exam - the discussion boards are great and point to more than enough supplementary learning resources to master the material."
      },
      {
        title: "Scaling Docker on AWS",
        status: "completed",
        provider: "Udemy",
        coursePage: "https://www.udemy.com/scaling-docker-on-aws/",
        completionDate: "March 2017",
        certificateUrl: "https://www.udemy.com/certificate/UC-MHFTTAS0",
        review: "This course was a very hands-on guide to deploying a dockerized app on a load-balanced cluster in AWS. I love that it used the command-line for all of the AWS stuff - that goes a long way towards keeping things relevant as the AWS services get updated. While explanations didn't go very deep - all the steps were there and it wasn't difficult to find a lot of supplementary information online."
      },
      {
        title: "Using Python for Research",
        status: "completed",
        provider: "edX",
        coursePage: "https://www.edx.org/course/using-python-research-harvardx-ph526x",
        syllabus: "https://courses.edx.org/courses/course-v1:HarvardX+PH526x+3T2016/4bdcc373b7a944f8861a3f190c10edca/",
        completionDate: "December 2016",
        certificateUrl: "https://courses.edx.org/certificates/ea5c3bf84f394c579b885876cd9fc46d",
        review: "This course was fantastic. After a brief refresher on some python tools (NumPy, SciPy, Matplotlib), it dives right into analyzing some real and very interesting case data. DNA Translation, Language Processing, Classification and Social Network Analysis - each case study introduces new topics like principal component analysis or k-nearest neighbor classification. The instructor is clear, knowledgeable and engaging and the case study material is easily digestable but compelling enough that I found myself doing a little extra reading outside the scope of the course."
      },
      {
        title: "Introduction to Python for Data Science",
        status: "completed",
        provider: "edX",
        coursePage: "https://www.edx.org/course/introduction-python-data-science-microsoft-dat208x-5",
        syllabus: "https://courses.edx.org/courses/course-v1:Microsoft+DAT208x+5T2016/a83dfa3e93a34598987774b010e84043/",
        completionDate: "October 2016",
        certificateUrl: "https://courses.edx.org/certificates/509cce8ccf3743b8840a12152b342d79",
        review: "This course helped me start to really know python. The instructor was great and while the labs (in DataCamp) had some issues - they were workable and decently challenging. The Numpy, Matplotlib and Pandas sections each gave a solid overview."
      }
    ];
  }
}
