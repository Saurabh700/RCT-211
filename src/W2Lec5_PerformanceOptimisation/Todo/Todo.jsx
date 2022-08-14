import React, { useState } from "react";
import { useCallback } from "react";
import TodoItem from "./TodoItem";

const initState = [
  { id: 1, status: false, title: "Task 1" },
  { id: 2, status: false, title: "Task 2" },
  { id: 3, status: false, title: "Task 3" },
];

// use profiler to see why TodoItem is also re rendering on change in input in Todo

const TodoPerformanceOptimise = () => {
  const [todos, setTodos] = useState(initState); // this is hook 1
  const [currTodo, setCurrTodo] = useState(""); // this is hook 2

  //   react keeps a track of the list of hook and profiler uses this concept to tell that which hook is re-rendering the component

  // const handleDelete = useCallback(
  //   (id) => {
  //     const rem = todos.filter((item) => item.id !== id);
  //     setTodos(rem);
  //   },
  //   [todos]
  // );

  // useCallback memoises a function
  // useMemo memoises a value

  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // useCallback memoises the function

  // this handleToggle is imp --> iska logic bhul gya tha main

  // const handleToggle = useCallback(
  //   (id) => {
  //     let newTodo = todos.map((item) =>
  //       item.id === id ? { ...item, status: !item.status } : item
  //     );
  //     setTodos(newTodo);
  //   },
  //   [todos]
  // );

  // ab ek last problem yeh aa rhi hai ki jab main koi new task add karu tab mere prev tasks bhi rerender ho rhe hai --> task1, task2 and task3 --> but inko nahi hona cahieye na rerender thats why i have to remove todos as dependency

  const handleToggle = useCallback((id) => {
    setTodos((prev) => {
      prev.map((item) => {
        return item.id === id ? { ...item, status: !item.status } : item;
      });
    });
  }, []);

  const handleAdd = () => {
    const payload = {
      title: currTodo,
      status: false,
      id: todos.length + 1,
    };
    setTodos([...todos, payload]);
    setCurrTodo("");
  };
  return (
    <div>
      <div>Todo</div>
      <div>
        <input
          value={currTodo}
          onChange={(e) => setCurrTodo(e.target.value)}
          type="text"
        />
        <button onClick={handleAdd}>ADD</button>
        <div>
          {todos.length &&
            todos.map((item) => (
              <TodoItem
                key={item.id}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                {...item}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoPerformanceOptimise;

// there is no props in TodoPerformanceOptimise thats why using React.memo makes no scence here
// memo depends on props
