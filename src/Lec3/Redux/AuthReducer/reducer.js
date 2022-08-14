import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./actionTypes";

const initState = {
  isAuth: false,
  token: "",
  isAuthLoading: false,
  isAuthFailed: false,
};

const reducer = (oldState = initState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...oldState, isAuthLoading: false };

    case USER_LOGIN_SUCCESS:
      return {
        ...oldState,
        isAuthFailed: false,
        isAuthLoading: false,
        token: payload,
        isAuth: payload && true,
      };

    case USER_LOGIN_FAILURE:
      return {
        ...oldState,
        isAuthFailed: true,
        isAuth: false,
        isAuthLoading: false,
        token: "",
      };

    default:
      return oldState;
  }
};

export { reducer };
