import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
} from "./auth.types";

let token = sessionStorage.getItem("token") || "";
let userId = sessionStorage.getItem("userId") || "";
export const authInitalState = {
  loading: false,
  data: {
    token: token,
    isAuthenticated: token ? true : false,
    userId: userId || "",
  },
  error: false,
};

export const authReducer = (state = authInitalState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case AUTH_SIGN_IN_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          token: payload.token,
          isAuthenticated: true,
          userId: payload.userId,
        },
      };
    }
    default: {
      return state;
    }
  }
};
