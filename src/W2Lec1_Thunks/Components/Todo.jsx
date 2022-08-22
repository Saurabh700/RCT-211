import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTaskFailure,
  getTaskRequest,
  getTaskSuccess,
  getTodos,
} from "../Redux/action";
import TodoInput from "./TodoInput";

const Todo = () => {
  const dispatch = useDispatch();
  const todoData = useSelector((store) => store.tasks);

  console.log(todoData);
  useEffect(() => {
    // Method 1
    //getTodos(dispatch); //we generally pass an object as a argument but here we are passing a method which is working but is not a good practice

    // its just apneko habit hai dispatch ko bahar likhene ki isilye esa kia .. nhi to method1 is easy usme middleware/thunk likhne ki zarurat nahi

    // Method 2
    dispatch(getTodos);

    //<================== MOST IMP POINT ABOUT FUNCTIONALITY OF THUNK==================>

    // yaha se dispatch nikla to vo jayega middleware ke paas --> and jaisey hi middleware ko pata chalega ki dispatch ke andar to ek function hai to vo swap kar dega --> dispatch(getTodos) will become getTodos(dispatch)--> jaisey hi swap hua vaisey hi getTodo call ho jayega and then getTodo execute hoga which is in action.js --> tab jakar server se data milega --> AND SINCE after swapping it becomes getTodos(dispatch) --> which is not a dispatch anymore so it will never go to the reducer

    //<================== MOST IMP POINT ABOUT FUNCTIONALITY OF THUNK==================>

    // to obtain this functionnality we can simply pass dispatch as an argument or we can pass getTodo as a function inside dispatch and then middleware will pass argument as a parameter --> both method are exactly same but we will use middleware method to achieve this because that way we can also use Thunks
  }, []);
  return (
    <div>
      <h2>Todo</h2>
      {/* <TodoInput getTodos={getTodos} /> */}
      {/* getTodos ko prop ke jaisey pass karne se accha hai ki getTodos ko action .js main dal do aur waha se TodoInput main call karlo */}
      <TodoInput />
      {todoData?.length > 0 &&
        todoData?.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
};

export default Todo;
