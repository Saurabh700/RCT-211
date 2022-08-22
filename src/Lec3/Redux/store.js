import {
  combineReducers,
  legacy_createStore,
  applyMiddleware,
  compose,
} from "redux";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";

// inside store we cannot use multiple reducers or multiple enhancers so to solve this problem combineReducers and compose come into play

// if we have created both the reducer with same name then too i can import them in this way

const rootReducer = combineReducers({ AppReducer, AuthReducer });

// store
// next --> go to the next middleware if available, else go to the reducer function
// action --> action object that we got from the dispatcher function

// jab bhi kuch dispatch karengey tab vo middleware se hote hue hi jayega --> its like a toll naka
// logger is used to keep track of the api calls made
const logger1 = (store) => (next) => (action) => {
  console.log("going inside logger 1", action); // this is the same action that we are passing inside the dispatch method
  const val = next(action);
  console.log("coming outside logger 1", next); //it is a function that calls the next middleware if present else it calls reducer function
  return val;
};

// refer closure.js to understand this flow
const logger2 = (store) => (next) => (action) => {
  console.log("going inside logger 2", next);
  const val = next(action);
  console.log("coming outside logger 2", action);
  return val;
};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// apply middleware is a store enhancer , and to use multiple enhancers we need to use compose
const store = legacy_createStore(
  rootReducer,
  //   applyMiddleware(logger1, logger2) -> enhancer1
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() --> enhancer2
  //   we will combine both the enhancers using compose
  composeEnhancers(
    applyMiddleware(logger1, logger2) // can add more enhancers here
  )
);

// to use redux extension we just need to copy that window line and nothing else
export { store };

// middlewares --> something that is between two entities
// dispatch(action) ----> (middleware) ---> reducer
// middlewares have access to action before they reaches the reducer so that we can perform additional logic on that action
