import React from "react";
import { useState } from "react";
import { handleDecrement, handleIncrement } from "./action";
import { store } from "./store";

const Counter = () => {
  // creating counter using pure Redux

  // redux is a central library outside the react ecosystem --> thats why we also move handleIncrement and decrement to action.js

  const { count } = store.getState();
  const { dispatch } = store;
  // console.log(dispatch);
  // console.log(store);
  const [local, setLocal] = useState(0);

  //   still the counter is not working bcoz counter is changing in redux store so react ko kaisey pata chalega ki redux main koi changes ho raha hai --> isilye apneko store.subscribe use karna padega
  //   it will run a callback function whenever the state inside redux store updates --> so that the dom can rerendres
  store.subscribe(() => {
    setLocal((prev) => prev + 1); // prefer this one
    // setLocal(local + 1);
  });

  //   moved to action.js
  //   const handleIncrement = () => {
  //     dispatch({ type: "INCREMENT", payload: 1 });
  //     console.log(store.getState());
  //   };
  //   const handleDecrement = () => {
  //     dispatch({ type: "DECREMENT", payload: 1 });
  //   };
  return (
    <div>
      Counter:{count}
      <div>
        {/* note-> handleInrement ko bhi invoke karna padega qki type:"Increment" handleIncrement ke return ke andar hai */}
        <button onClick={() => dispatch(handleIncrement())}>+</button>
        <button onClick={() => dispatch(handleDecrement())}>-</button>
      </div>
    </div>
  );
};

export default Counter;
