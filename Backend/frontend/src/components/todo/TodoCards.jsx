import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";

const TodoCards = ({
  title,
  body,
  id,
  delid,
  display,
  updateId,
  toBeUpdate,

}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="p-3 todo-card">
    <div>
      <input 
        type="checkbox" 
        id="checkbox1" 
        name="checkbox1" 
        checked={isChecked} 
        onChange={handleCheckboxChange}/>
      <label htmlFor="checkbox1">
      <h5 className={isChecked ? "completed" : ""}>{title}</h5>
      </label>
      <p className="todo-card-p">{body.substring(0, 77)}...</p>
      </div>
      <div className="d-flex justify-content-around ">

        <div
          className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 "
          onClick={() => {
            display("block");
            toBeUpdate(updateId);
          }}
        >
          <GrDocumentUpdate className="card-icons" /> Update
        </div>
        <div
          className="d-flex justify-content-center align-items-center card-icon-head  px-2 py-1 text-danger"
          onClick={() => {
            delid(id);
          }}
        >
          <AiFillDelete className="card-icons del" /> Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCards;
