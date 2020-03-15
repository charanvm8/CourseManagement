import React from "react";
import Course from "../Course/Course";
import { Link } from "react-router-dom";

function CourseList(props) {
  
  return (
    <>
      <Link class="btn btn-primary" to="/course">Create Course</Link>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map(course => {
            return (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.title}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CourseList;
