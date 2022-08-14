import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDecrement, handleIncrement } from "./action";
// import { store } from "./store";

// need to install 2 dependencies --> redux & react-redux
// wrap app.js with Provider

const Counter2 = () => {
  // Creating counter using redux and react-redux

  const store = useSelector((store) => store);
  console.log(store, "store ");
  //   useSelector do the === check between old and new value to find out if something has changed or not--> but {} === {} will returns false --> and by using spread operator in reducer everytime i am creating a new object isilye useSelector jab === check karega tab false value ayegi isilye useSelector usko update kar dega --> isilye counter main change karne se todos bhi re-render ho rha hai --> to solve this problem we have to use "shallowEqual"

  //  useSelector takes the state present in store as the first argument
  console.log(store, "check store");
  const dukan = useSelector((dukan) => dukan);
  console.log(dukan, "check dukan");
  const name = useSelector((store) => store.name);
  console.log(name, "name");
  // useSelector takes one argument that is the store itself and another argument is a equality function

  //   IMP --> store ko index.js main store.js se la rha hu and store ke andar reducer hai --> so reducer ke andar jo oldState hai uske andar jo bhi hoga vo store ke andar aa jayega -> isilye jab main store ko console karunga tab vo mko {count:0} de rha hai isilye below main store main se count ki value le rha hu

  const count = useSelector((store) => store.count);

  //   Lec1 main apan subscribe and setState ka use kar rahe the to update dom but here we dont need to do that because useSelector has this inbuilt feature to update dom when any changes happen in the store--> because useSelector already subscribed the value
  console.log("I am rendering");

  // whenever you want to change/update/modify any value in redux store then we can use dispatch method from useDispatch
  const dispatch = useDispatch();

  return (
    <div>
      Counter 2:{count}
      <div>
        {/* note-> handleInrement ko bhi invoke karna padega qki type:"Increment" handleIncrement ke return ke andar hai and dispatch only takes an object */}
        <button onClick={() => dispatch(handleIncrement())}>+</button>
        <button onClick={() => dispatch(handleDecrement())}>-</button>
      </div>
    </div>
  );
};

export default Counter2;
