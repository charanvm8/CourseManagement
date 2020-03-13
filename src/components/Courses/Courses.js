import React, {useState, useEffect} from "react";
import { getCourses } from "../../api/courseApi";
import CourseList from "../Courses/CourseList/CourseList";

function Courses() {
    const [courses,setCourses] = useState([]);

    useEffect(()=>{
        getCourses().then((courses)=>{
            setCourses(courses);
        })
    },[]);

    return <CourseList courses={courses} />
}

export default Courses;
