import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoRequest } from "../../Lec2/action";
import { addTaskFailure, addTaskSuccess, getTodos } from "../Redux/action";

const TodoInput = () => {
  const [currentTask, setCurrentTask] = useState("");
  // since we dont need currentTask anywhere else in the applicatiion thats why we dont use it in redux store
  const dispatch = useDispatch();

  const addTask = () => {
    if (currentTask) {
      const payload = {
        title: currentTask,
        status: false,
      };
      dispatch(addTodoRequest());
      axios //abhi apan sirf data ko server par post kar rahe hai isilye return nahi likha
        .post("http://localhost:8080/todos", payload)
        .then((res) => dispatch(addTaskSuccess()))
        .then(() => dispatch(getTodos))
        .catch((err) => addTaskFailure());
    }
  };
  //   IMP --> if we want to add a new data then first add it to db.json and then get that data in redux store and then present it on dom -> because if more than one person is using same api then both will have same data --> qki lets say if any third person has added any data to server than there is a chance that we missed that data --> isilye everytime saare data ko redux store main dalo

  return (
    <div>
      <input
        type="text"
        value={currentTask}
        onChange={(e) => setCurrentTask(e.target.value)}
      />
      <button onClick={addTask}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
