import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { courseReducer } from "./courseDetail/course-detail.reducer";
import { authReducer } from "./auth/auth.reducer";
import { studentReducer } from "./student/studnet-detail.reducer";

const rootReducer = combineReducers({
  course: courseReducer,
  auth: authReducer,
  student: studentReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
