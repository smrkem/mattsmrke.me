import React from "react";
import { Course } from "./Course";

export class Courses extends React.Component {
  render() {
    let coursesList = this.getCourses().map((course, i) => {
      return <Course {...course} key={i} />
    });
    return(
      <div id="main-wr">
        <div id="courses" className="main main-content">
          { coursesList }
        </div>
      </div>
    );
  }

  getCourses() {
    return [
      {
        title: "Angular 2 + Rails 5 Bootcamp",
        status: "In progress",
        provider: "Udemy",
        coursePage: "https://www.udemy.com/angular-on-rails-course",
        review: "A fast-paced walkthrough for an Angular app that communicates with 2 different Rails API services. The rails parts goes into no detail and just scaffolds everything. The Angular parts have more information, but explanations are often outdated, too shallow or in some cases incorrect.",
      },
      {
        title: "AWS Certified Solutions Architect",
        status: "Completed",
        provider: "A Cloud Guru",
        coursePage: "https://acloud.guru/course/aws-certified-solutions-architect-associate",
        completionDate: "May 2017",
        certificateUrl: "todo",
        review: "A great introduction to AWS services and information about the AWS exams and certification process. The course gives a good overview of the relevant AWS services, and is followed up with hands-on labs and practice exams. While this course, on its own, is probably not enough to pass the exam - the discussion boards are great and point to more than enough supplementary learning resources to master the material."
      },
      {
        title: "Using Python for Research",
        status: "Completed",
        provider: "edX",
        coursePage: "https://www.edx.org/course/using-python-research-harvardx-ph526x",
        syllabus: "https://courses.edx.org/courses/course-v1:HarvardX+PH526x+3T2016/4bdcc373b7a944f8861a3f190c10edca/",
        completionDate: "December 2016",
        certificateUrl: "todo",
        review: "This course was fantastic. After a brief refresher on some python tools (NumPy, SciPy, Matplotlib), it dives right into using them to analyze some real and very interesting case data. DNA Translation, Language Processing, Classification and Social Network Analysis - each case study introduces new topics like principal component analysis or k-nearest neighbor classification. The instructor is clear, knowledgeable and engaging and the case study material is easily digestable but compelling enough that I found myself doing a little extra reading outside the scope of the course."
      },
      {
        title: "Scaling Docker on AWS",
        status: "Completed",
        provider: "Udemy",
        coursePage: "https://www.udemy.com/scaling-docker-on-aws/",
        completionDate: "March 2017",
        certificateUrl: "todo",
        review: "This course was a very hands-on guide to deploying a dockerized app on a load-balanced cluster in AWS. I love that it used the command-line for all of the AWS stuff - that goes a long way towards keeping things relevant as AWS updates. While explanations didn't go very deep - all the steps were there and it wasn't difficult to find a lot of supplementary information online."
      },
      {
        title: "Introduction to Python for Data Science",
        status: "Completed",
        provider: "edX",
        coursePage: "https://www.edx.org/course/introduction-python-data-science-microsoft-dat208x-5",
        syllabus: "https://courses.edx.org/courses/course-v1:Microsoft+DAT208x+5T2016/a83dfa3e93a34598987774b010e84043/",
        completionDate: "",
        certificateUrl: "todo",
        review: ""
      }
    ];
  }
}
