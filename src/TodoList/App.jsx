import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  //useState
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  // update using useState
  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  // add list to TodoList
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  // Delete items
  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrayEl, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type='text'
            value={inputList}
            placeholder='Add a Items'
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>
          <ol>
            {items.map((itemVal, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
export default App;
