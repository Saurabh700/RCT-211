import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

// in Todos.jsx -> dispatch(getTodos); main getTodos is a function jisko apan pass kar rahe hai jiski wajah se error aa rha hai isilye apnoke thunk ka use kara taki vo error resolve karde --> point to note here is that we dont need to tell thunk ki kiske liye dispatch par thunk lagana hai --> middle ware will apply on all dispatches

// thunk will replace customMiddleware
// middleware works on this simple concept --> https://humornama.com/wp-content/uploads/2020/10/Akshay-Kumar-Swap-meme-template-of-Ajnabee.jpg
const customMiddleware = (store) => (next) => (action) => {
  // whatever that i am passing inside dispatch will be an action --> here action will be getTodos which is a function
  if (typeof action === "function") {
    // if argument is function then argument ko bahar lelo and dispatch ko andar dal do
    return action(store.dispatch);
  } else if (typeof action === "object") {
    return next(action); // next main isilye bhej rahe hai qki yeh check karega ki agar koi middleware present hai to usme action ko bhej dega and if no other middleware is present then reducer main bhej dega
  }
};

// const store = legacy_createStore(reducer, applyMiddleware(customMiddleware));
const store = legacy_createStore(reducer, applyMiddleware(thunk));

export { store };

// to use thunk --> npm install redux-thunk
// import thunk from "redux-thunk"
// const store = legacy_createStore(reducer, applyMiddleware(thunk));
