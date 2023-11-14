import { Dashboard } from "../components/dashboard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseList } from "../stores/courseDetail/course-detail.action";
export const Home = () => {
  const { data } = useSelector((store) => store.course);

  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(getCourseList());
  }, [dispatcher]);
  return (
    <>
      <Dashboard data={data} />
    </>
  );
};
