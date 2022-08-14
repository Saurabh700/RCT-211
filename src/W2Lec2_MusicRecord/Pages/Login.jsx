import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import { USER_LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";

  // const token = useDispatch((store) => store.AuthReducer);
  // console.log(token);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then((res) => {
        console.log(
          res,
          "response that i get from login function because i have used return before axios so that i can chain it here using .then"
        );
        if (res.type === USER_LOGIN_SUCCESS) {
          navigate(comingFrom, { replace: true });
        }
      });
      // email and password spelling should be as that is there in the reqres
    }
  };
  return (
    <div>
      Login
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
