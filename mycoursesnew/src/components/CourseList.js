import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../store/slices/courseSlice";

function CourseList() {
  const dispatch = useDispatch();

  const {courses} = useSelector(({ form, course: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return{
      courses:filteredCourses
    }
  });

  const rendered = courses.map((course) => {
    return (
      <div key={course.id} className="eachCoursesDiv">
        <h3>{course.name}</h3>
        <p>{course.description}</p>
        <p>{course.cost} $</p>
        <button
          className="buttonDelete"
          onClick={() => {
            dispatch(removeCourse(course.id));
          }}
        >
          Sil
        </button>
      </div>
    );
  });

  return <div>{rendered}</div>;
}

export default CourseList;
