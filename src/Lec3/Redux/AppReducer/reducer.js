import * as types from "./actionType";
import { loadData, saveData } from "../../Utils/accessLocalStorage";

// read about the diff between session storage and cookies

// instead of local storage we can also use redux persist the store data
const initialState = {
  count: loadData("count") || 5,
  name: "saurabh",
  todos: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      let newCountIncrement = oldState.count + action.payload;
      saveData("count", newCountIncrement);
      return { ...oldState, count: newCountIncrement };
    case types.DECREMENT:
      let newCountDecrement = oldState.count - action.payload;
      saveData("count", newCountDecrement);
      return { ...oldState, count: newCountDecrement };
    case types.GET_TODOS_REQUEST:
      return { ...oldState, isLoading: true, isError: false };
    case types.GET_TODOS_FAILURE:
      return { ...oldState, isError: true, isLoading: false };
    case types.GET_TODOS_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        todos: [...action.payload], //this way we will replace all the data inside todos
        // but to add --> todos:[ ...oldState.todos, ...payload]
      };
    default:
      return oldState;
  }
};

export { reducer };
