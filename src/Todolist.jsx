import React from "react";
import { TiDelete } from "react-icons/ti";

const Todolist = (props) => {
  return (
    <>
      <div className="todo-style">
        <TiDelete
          onClick={() => {
            props.onselect(props.id);
          }}
          className="fa-times"
        />
        <li>{props.text}</li>;
      </div>
    </>
  );
};

export default Todolist;
