import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  enroleInCourse,
  getCourseDetail,
} from "../stores/courseDetail/course-detail.action";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../CSS/dashboard.module.css";

export const DetailPage = () => {
  const { detail } = useSelector((store) => store.course);
  console.log(detail);
  const navigate = useNavigate();
  const { isAuthenticated, userId, token } = useSelector(
    (store) => store.auth.data
  );

  const dispatcher = useDispatch();
  const { id } = useParams();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    dispatcher(getCourseDetail(id));
  }, [dispatcher, id]);

  const handleShow = () => {
    setFlag(!flag);
  };

  const handleEnroll = (id,token) => {
    if (!isAuthenticated) {
      alert("Kindly Before Enrolling In Course");
      navigate("/login");
      return;
    }
    console.log({token});
    dispatcher(enroleInCourse(id, token));
  };

  const isEnrolled = () => {
    let studnet = detail?.student?.find((item) => (item._id = userId));
    return studnet ? true : false;
  };

  return (
    <>
      <div className={styles.detail}>
        <div className={styles.detailHeadding}>
          <h3>{detail.name}</h3>
          <div>
            <button
              className={isEnrolled() ? styles.red : ""}
              disabled={isEnrolled()}
              onClick={() => handleEnroll(id,token)}
            >
              {isEnrolled() ? "Enrolled" : "Enroll"}
            </button>
          </div>
        </div>

        <div className={styles.instruction}>
          <p>Instructor : {detail.instructor}</p>
          <p>Description : {detail.description}</p>
          <p>Enrollment status : {detail.enrollmentStatus}</p>
          <p>Cource Duration : {detail.duration}</p>
          <p>Schedule : {detail.schedule}</p>
          <p>Location : {detail.location}</p>
          <p>
            Prerequisites :
            {detail.prerequisites?.map((item, i) => {
              return <span key={i}>{item},</span>;
            })}
          </p>

          <div onClick={handleShow}>
            Syllabus :
            {flag === true
              ? detail.syllabus?.map((item) => {
                  return (
                    <>
                      <p>Week:{item.week}</p>
                      <p>Topic: {item.topic}</p>
                      <p>Content : {item.content}</p>
                      <hr />
                    </>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};
