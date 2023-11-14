// Auth Actions here
import { helperFunction } from "../../utils/helper";
import { AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS } from "./auth.types";
import axios from "axios";

export const authAction = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_SIGN_IN_LOADING });
  try {
    let res = await axios.post(`http://localhost:8000/student/login`, creds);
    sessionStorage.setItem("token", res.data.token);

    let userId = helperFunction(res.data.token);
    res.data.userId = userId;
    sessionStorage.setItem("userId", userId);
    dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: res.data });
  } catch (e) {
    console.log(e);
  }
};
