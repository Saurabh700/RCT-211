// install axios and json-server
// npm install axios json-server
// now inside package.json--> inside scripts write -->
// "server":"json-server --watch db.json --port 8080"
// now in terminal --> npm run server --> this is just a smart way

import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  todosFailure,
  todosRequest,
  todosSuccess,
} from "../Redux/AppReducer/action";

const TodoLec3 = () => {
  //   const [todos, setTodos] = useState([]); --> generally we store data like this --> but maybe we need this data somewhere else also thats why now we use redux store to store data that we get from axios --> and to add something to store we use the dispatch method

  const dispatch = useDispatch();

  //   const todos = useSelector((store) => store.todos);
  //   const todos = useSelector((store) => {
  //     return {
  //       todos: store.todos,
  //       isLoading: store.isLoading,
  //       isError: store.isError,
  //     };
  //   });
  // OR
  const { todos, isLoading, isError } = useSelector((store) => {
    return {
      todos: store.AppReducer.todos,
      isLoading: store.AppReducer.isLoading,
      isError: store.AppReducer.isError,
    };
  }, shallowEqual);

  //   useSelector do the === check between old and new value to find out if something has changed or not--> but {} === {} will returns false --> and by using spread operator in reducer everytime i am creating a new object isilye useSelector jab === check karega tab false value ayegi isilye useSelector usko update kar dega --> isilye counter main change karne se todos bhi re-render ho rha hai --> to solve this problem we have to use "shallowEqual" --> shallowEqual only compares the value inside objects --> therefore only if any value inside object changes then only it will re-render

  console.log("on clicking Counter 2 --> todo is also rendering");

  console.log(todos);

  const getTodos = () => {
    dispatch(todosRequest());
    return axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        console.log(res.data);
        dispatch(todosSuccess(res.data));
      })
      .catch((res) => {
        console.log(res);
        dispatch(todosFailure());
      });
  };

  //   post todo from 2h17min

  // lecture main addTodoRequest, Success and Failure likha lekin uske bina bhi mast kam hota hai --> to post anything use below code only and nothing else

  const addTodos = (payload) => {
    return axios
      .post("http://localhost:8080/todos", payload)
      .then((r) => getTodos())
      .catch((e) => console.log(e, "got an error"));
  };

  // IMP
  // addTodo ke liye redux and reducer ki koi zarurat hi nahi hai..qki to add any data to server we can simply do a post request and then we can get that updated data and only to store that data in store we will use Reducer

  // why we use return with axios ? --> if we dont use return then we cannot chain multiple promises together --> ex here addTodos return axios and axios is a promise and only then i can chain it with getTodos()
  // const addTodos = (payload) => {
  //   // dispatch(addTodoRequest());
  //   return (
  //     axios
  //       .post("http://localhost:8080/todos", payload)
  //       .then((r) => dispatch(addTodoSuccess()))
  //       // .then(() => dispatch(getTodos())) --> we can also move to another function handleAddTodo
  //       // this second .then is very imp to reflect changes on DOM
  //       .catch((e) => dispatch(addTodoFailure()))
  //   );
  // };

  // const handleAddTodo = (payload) => {
  //   addTodos(payload).then(() => getTodos());
  // };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      Todo
      <TodoInput addTodos={addTodos} />
      {/* IMP --> yaha todos ke bad ? lagaya hai qki agar nahi lagate hai tab && condition false hone par undefine milega but agar pehle hi ? lagadiya tab vo further check hi nahi karega --> this is known as optional Chaining */}
      {/* when ever we want to use . operator then always use optional chaining */}
      {todos?.length > 0 &&
        todos.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
};

export default TodoLec3;
