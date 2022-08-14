import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { store } from "./Lec1/Redux/store";
// import { store } from "./Lec2/store";
// import { store } from "./Lec3/Redux/store";
// import { store } from "./W2Lec1_Thunks/Redux/store";
import { store } from "./W2Lec2_MusicRecord/Redux/store";
import { Provider } from "react-redux";

// console.log(store, "store");
// console.log(store.getState(), "return the state i.e., {count:0}");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // koi bhi component jisse andar apan dusre components ko rakhte hai vo higher order components hote hai --> here provider is an higher order component
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
