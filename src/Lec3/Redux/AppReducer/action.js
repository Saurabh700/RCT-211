import {
  ADD_TODOS_FAILURE,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  DECREMENT,
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  INCREMENT,
} from "./actionType";

const handleIncrement = () => {
  return { type: INCREMENT, payload: 1 };
  //   console.log(store.getState());
};
const handleDecrement = () => {
  return { type: DECREMENT, payload: 1 };
};

const todosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
const todosSuccess = (payload) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload,
  };
};
const todosFailure = () => {
  return {
    type: GET_TODOS_FAILURE,
  };
};
const addTodoRequest = () => {
  return {
    type: ADD_TODOS_REQUEST,
  };
};
const addTodoSuccess = () => {
  return {
    type: ADD_TODOS_SUCCESS,
  };
};
const addTodoFailure = () => {
  return {
    type: ADD_TODOS_FAILURE,
  };
};

export {
  handleDecrement,
  handleIncrement,
  todosFailure,
  todosRequest,
  todosSuccess,
  addTodoRequest,
  addTodoSuccess,
  addTodoFailure,
};
