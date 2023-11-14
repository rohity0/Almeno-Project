import axios from "axios";
import {
  GET_COURSE_Detail,
  GET_COURSE_ERROR,
  GET_COURSE_LIST,
} from "./course-detail.action-type";

export const getCourseList = () => async (dispatch) => {
  // dispatch({type: GET_PRODUCTS_LOADING})
  try {
    let response = await axios.get(
      `http://localhost:8000/course/list?page=1&pageSize=25`
    );
    dispatch({ type: GET_COURSE_LIST, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_COURSE_ERROR });
  }
};

export const getCourseDetail = (id) => async (dispatch) => {
  // dispatch({type: GET_PRODUCTS_LOADING})
  try {
    let response = await axios.get(`http://localhost:8000/course/list/${id}`);
    dispatch({ type: GET_COURSE_Detail, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_COURSE_ERROR });
  }
};

export const enroleInCourse = (id, token) => async (dispatch) => {
  try {
    let response = await axios.put(
      `http://localhost:8000/course/course-enrole/${id}/student`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log({ response });
    dispatch({ type: GET_COURSE_Detail, payload: response.data });
    getCourseDetail(id);
  } catch (e) {
    dispatch({ type: GET_COURSE_ERROR });
  }
};
