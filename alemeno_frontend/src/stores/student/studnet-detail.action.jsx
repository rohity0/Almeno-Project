import axios from "axios";
import {
  GET_STUDENT_Detail,
  GET_STUDENT_ERROR,
  GET_STUDENT_LIST,
} from "./studnet-detail.action-type";

export const getStudentCourse = (token) => async (dispatch) => {
  // dispatch({type: GET_PRODUCTS_LOADING})
  try {
    let response = await axios.get(
      `http://localhost:8000/course/student-enrolled-course`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log(response.data);
    dispatch({ type: GET_STUDENT_LIST, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_STUDENT_ERROR });
  }
};

export const getStudentCourseDetail = (id, token) => async (dispatch) => {
  // dispatch({type: GET_PRODUCTS_LOADING})
  try {
    let response = await axios.get(
      `http://localhost:8000/course/course/${id}/student/`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log({ response });
    dispatch({ type: GET_STUDENT_Detail, payload: response.data[0] });
  } catch (e) {
    dispatch({ type: GET_STUDENT_ERROR });
  }
};

export const completeCourseStatus = (id, data, token) => async (dispatch) => {
  try {
    let response = await axios.put(
      `http://localhost:8000/course/course-status/${id}`,
      data,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log({ response });
    dispatch({ type: GET_STUDENT_Detail, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_STUDENT_ERROR });
  }
};
