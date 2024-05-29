import React, { useState } from "react";
import "./App.css";
import Todolist from "./Todolist";

const App = () => {
  const [inputlist, setinputlist] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setinputlist(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputlist];
    });
    setinputlist("");
  };

  const deleteItems =(id)=>{
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index)=>{
return index !== id;
      });
    });
  };
  return (
    <>
      <div className=" main-div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add A Items"
            onChange={itemEvent}
            value={inputlist}
          />
          <button onClick={listOfItems}>+</button>

          <ol  >
            {/* <li>{inputLIst}</li> */}

            {Items.map((itemval ,Index) => {
           return   <Todolist key={Index} id={Index} text = {itemval}  onselect = {deleteItems} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
