import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./Lec1/Redux/Counter";
import Counter2 from "./Lec2/Counter2";
import Todo from "./Lec2/Todo/Todo";
import CounterLocalStorage from "./Lec3/CounterLocalStorage";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "./Lec3/Redux/AuthReducer/action";
import TodoLec3 from "./Lec3/Todo/TodoLec3";
import Homepage from "./W2Lec1_Thunks/Pages/Homepage";
import MainRoutes from "./W2Lec2_MusicRecord/Pages/MainRoutes";
import Debouncing from "./W2Lec4_customHook/Debouncing";
import TodoPerformanceOptimise from "./W2Lec5_PerformanceOptimisation/Todo/Todo";

function App() {
  // const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  // handleLogin function is only for lec3
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // here we dont use return before axios because here we dont want to chain it with anything
  const handleLogin = () => {
    const payload = {
      email: email,
      password: password,
    };
    dispatch(loginRequest());
    axios
      .post("https://reqres.in/api/login", payload)
      .then((r) => {
        console.log(r.data);
        return dispatch(loginSuccess(r.data));
        // yaha agar return nahi bhi likhunga tab bhi chalega but agar in future iske bad ek aur .then lagana pade tab chaining karne ke liye return likhna padega --> isilye return likh hi do to accha hai
        // but dispatch ko single line main likh rahe ho tab bina return ke bhi .then laga sakte but agar multi line expressions then always use return
      })
      .catch(() => dispatch(loginFailure()));
  };
  return (
    <div>
      {/* Lec1 */}
      {/* <Counter /> */}
      {/* Lec2 */}
      {/* <Counter2 />
      <Todo /> */}
      {/* Lec3 */}
      {/* <CounterLocalStorage />
      <br />
      <div>
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Submit</button>
      </div>
      {isAuth && <TodoLec3 />} */}
      {/* W2L1 */}
      <Homepage />
      {/* W2L2 & W2L3 */}
      {/* <MainRoutes /> */}
      {/* W2L4 */}
      {/* <Debouncing /> */}
      {/* W2L5 */}
      {/* <TodoPerformanceOptimise /> */}
    </div>
  );
}

export default App;
