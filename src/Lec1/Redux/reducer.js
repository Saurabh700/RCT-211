const reducer = (oldState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...oldState, count: oldState.count + action.payload };
    //   yaha bhi mainey spread operator isilye use kia hai qki state ko directly modify nahi kar sakte verna yeh impure function ban jayega
    // oldstate = {count:oldState.count+action.payload} --> this is impure
    case "DECREMENT":
      return { ...oldState, count: oldState.count - action.payload };
    default:
      return oldState;
  }
};

export { reducer };
