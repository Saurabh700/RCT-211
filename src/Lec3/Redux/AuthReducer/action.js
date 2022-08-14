import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./actionTypes";

const loginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};
const loginSuccess = (payload) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload,
  };
};
const loginFailure = () => {
  return {
    type: USER_LOGIN_FAILURE,
  };
};

export { loginFailure, loginSuccess, loginRequest };
