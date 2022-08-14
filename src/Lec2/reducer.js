import * as types from "./actionType";

const initialState = {
  count: 5,
  name: "saurabh",
  todos: [],
  isLoading: false,
  isError: false,
};

// IMP ==> addTodoReq, addTodoSuccess and addTodoFailure ko reducer main likhne ki koi zarurat nahi hai qki -->

// first parameter of reducer is useSelector --> main application main bhi useSelector ka use karke old state ki value ko call kar sakta hu
// second parameter is useDispatch --> i can use useDispatch to send an object to action.. so that this action can make respective changes to oldState
const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return { ...oldState, count: oldState.count + action.payload };
    case types.DECREMENT:
      return { ...oldState, count: oldState.count - action.payload };
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
