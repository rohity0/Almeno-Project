import {
  GET_COURSE_Detail,
  GET_COURSE_LIST,
} from "./course-detail.action-type";



const initialState = {
  data: [],
  detail: {},
};

export const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COURSE_LIST: {
      return {
        ...state,
        data: payload,
      };
    }
    case GET_COURSE_Detail: {
      return {
        ...state,
        detail: payload,
      };
    }
    default:
      return state;
  }
};
