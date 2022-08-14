const handleIncrement = () => {
  return { type: "INCREMENT", payload: 1 };
  //   console.log(store.getState());
};
const handleDecrement = () => {
  return { type: "DECREMENT", payload: 1 };
};

export { handleDecrement, handleIncrement };
