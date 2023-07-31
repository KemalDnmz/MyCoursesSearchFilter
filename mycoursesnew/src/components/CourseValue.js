import React from "react";
import { useSelector } from "react-redux";

function CourseValue() {
  const totalCost = useSelector(({ form, course: { data, searchTerm } }) => data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).reduce((acc,course) => acc+course.cost,0)
   
    // Second (general) way:

    // let cost = 0;
    // for (let course of filteredCourses) {
    //   cost += course.cost;
    // }
    // return cost

  );

  return <div className="valueDiv">Total Cost: {totalCost} $ </div>;
}

export default CourseValue;
