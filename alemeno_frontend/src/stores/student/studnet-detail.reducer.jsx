import {
  GET_STUDENT_Detail,
  GET_STUDENT_LIST,
} from "./studnet-detail.action-type";

const initialState = {
  data: [],
  detail: {},
};

export const studentReducer = (state = initialState, { type, payload }) => {
  console.log(payload, type);
  switch (type) {
    case GET_STUDENT_LIST: {
      return {
        ...state,
        data: payload,
      };
    }
    case GET_STUDENT_Detail: {
      return {
        ...state,
        detail: payload,
      };
    }
    default:
      return state;
  }
};
