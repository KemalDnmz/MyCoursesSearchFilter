import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeName,
  changeDescription,
  changeCost,
} from "../store/slices/formSlice";
import { addCourse } from "../store/slices/courseSlice";

function CourseForm() {
  const dispatch = useDispatch();

  const { name, description, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });
  console.log(name, description, cost);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(addCourse({ name, description, cost }));
  };

  return (
    <div className="courseContainerDiv">
      <h2>Add Course</h2>
      <div className="courseDiv">
        <form>
          <div className="formDiv">
            <div>
              <label>Name </label>
              <input
                type="text"
                style={{ height: "30px" }}
                onChange={(event) => dispatch(changeName(event.target.value))}
                value={name}
              />
            </div>
            <div className="textAreaDiv">
              <label> Description </label>
              <textarea
                type="text"
                onChange={(event) =>
                  dispatch(changeDescription(event.target.value))
                }
                value={description}
              />
            </div>
            <div>
              <label>Price </label>
              <input
                type="number"
                style={{ height: "30px" }}
                onChange={(event) =>
                  dispatch(changeCost(parseInt(event.target.value)))
                }
                value={cost}
              />
            </div>
          </div>
        </form>
        <button className="buttonSave" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CourseForm;
