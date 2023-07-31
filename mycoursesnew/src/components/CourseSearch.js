import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store/slices/courseSlice";

function CourseSearch() {
  const disptach = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.course.searchTerm;
  });
  return (
    <div className="listHeader">
      <h2>My Courses</h2>
      <div className="search">
        <label>Search</label>
        <input style={{height:"30px"}}
          onChange={(event) => {
            disptach(changeSearchTerm(event.target.value));
          }}
          value={searchTerm}
        />
      </div>
    </div>
  );
}

export default CourseSearch;
