import {
  GET_TASKS_FAILURE,
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
} from "./actionTypes";

const initState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

// notice ki yaha par addTask ka koi case nahi hai qki jab bhi apan kich add karengey tab usko locally thodi add karenge balki usko seekhe api main hi post karengey phir usko get karne ke liye local main save karengey isilye sirf get ke liye hi reducer ka use karengey

const reducer = (oldState = initState, { type, payload }) => {
  switch (type) {
    case GET_TASKS_REQUEST: {
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };
    }
    case GET_TASKS_SUCCESS: {
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        tasks: payload,
        // here payload is already an array and since are getting it from server thats why it will store in memory in a new reference thats why we dont need to spread it
      };
    }
    case GET_TASKS_FAILURE: {
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return oldState;
  }
};

export { reducer };
