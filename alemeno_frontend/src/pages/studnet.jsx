import { getStudentCourse } from "../stores/student/studnet-detail.action";
import { Dashboard } from "../components/dashboard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const StudentPage = () => {
  const { data } = useSelector((store) => store.student);
  const { isAuthenticated, userId, token } = useSelector(
    (store) => store.auth.data
  );
  console.log(isAuthenticated, userId, token);
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(getStudentCourse(token));
  }, []);

  return (
    <>
      <Dashboard data={data} userId={userId} />
    </>
  );
};
