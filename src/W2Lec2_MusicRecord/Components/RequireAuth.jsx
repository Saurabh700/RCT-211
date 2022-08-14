import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  // useNavigate is a hook and Navigate is a component -> we cannot use hooks inside jsx thats why here we use component

  const location = useLocation();
  //   login karne ke bad user ko us particular page par bhejne ke liye jaha vo jana cahta tha lekin login nahi hone ki vajah se nahi ja paya --> apan useLocation use karengey
  //   whatever we pass inside Navigate is accessible to the page /login

  //   inside state we can pass anything {{name:"masai"}} and we can access it in the login page

  const auth = useSelector((store) => store.AuthReducer.isAuth);
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default RequireAuth;
