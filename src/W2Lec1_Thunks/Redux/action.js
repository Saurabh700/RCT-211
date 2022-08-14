// these are known as action creators which returns action object

import axios from "axios";
import {
  ADD_TASKS_FAILURE,
  ADD_TASKS_REQUEST,
  ADD_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
} from "./actionTypes";

const getTaskRequest = () => {
  return {
    type: GET_TASKS_REQUEST,
  };
};
const getTaskSuccess = (payload) => {
  return {
    type: GET_TASKS_SUCCESS,
    payload,
  };
};
const getTaskFailure = () => {
  return {
    type: GET_TASKS_FAILURE,
  };
};

const addTaskRequest = () => {
  return {
    type: ADD_TASKS_REQUEST,
  };
};
const addTaskSuccess = () => {
  return {
    type: ADD_TASKS_SUCCESS,
  };
};
const addTaskFailure = (errorMessage) => {
  return {
    type: ADD_TASKS_FAILURE,
    payload: errorMessage,
  };
};

// here the error is we cannot declare dispatch=useDispatch() on root level--> we can only declare it inside a react component but here we dont have any so we will pass dispatch as a argument and this is the reason why we use thunk

// getTodos ko todo.jsx se nikal kar yaha dal do and getTodos main dispatch dal do

// NOTE jaha bhi get todo ko kall kare waha waha yeh concept lagega --> first jab component mount hota hai tab dispatch(getTodo) ko useEffect main likho and second --> inside todoInput --> when ever we add a new task then also we will fetch everything again so there also use dispatch(getTodos)
const getTodos = (dispatch) => {
  dispatch(getTaskRequest());
  axios
    .get("http://localhost:8080/todos")
    .then((res) => dispatch(getTaskSuccess(res.data)))
    .catch((e) => dispatch(getTaskFailure(e)));
};

export {
  getTaskFailure,
  getTaskSuccess,
  getTaskRequest,
  addTaskFailure,
  addTaskRequest,
  addTaskSuccess,
  getTodos,
};
