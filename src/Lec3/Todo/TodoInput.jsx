import React from "react";
import { useState } from "react";

const TodoInput = ({ addTodos }) => {
  // i just want this text here and not globally thats why i havent declared this in redux store
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const addTodoHandler = () => {
    const payload = {
      title: text,
      status: false,
    };
    addTodos(payload);
  };
  return (
    <div>
      <input
        placeholder="Add Todo"
        value={text}
        onChange={changeHandler}
        type="text"
      />
      <button onClick={addTodoHandler}>Add</button>
    </div>
  );
};

export default TodoInput;
