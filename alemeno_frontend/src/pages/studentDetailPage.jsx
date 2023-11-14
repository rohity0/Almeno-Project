import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  enroleInCourse,
  getCourseDetail,
} from "../stores/courseDetail/course-detail.action";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../CSS/dashboard.module.css";
import {
  completeCourseStatus,
  getStudentCourseDetail,
} from "../stores/student/studnet-detail.action";

export const StudentDetailPage = () => {
  const { detail } = useSelector((store) => store.student);
  const navigate = useNavigate();
  const { isAuthenticated, userId, token } = useSelector(
    (store) => store.auth.data
  );
  const dispatcher = useDispatch();
  const { id } = useParams();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    dispatcher(getStudentCourseDetail(id, token));
  }, [dispatcher, id]);

  const handleShow = () => {
    setFlag(!flag);
  };

  if (!isAuthenticated) {
    alert("Kindly Before Enrolling In Course");
    navigate("/login");
    return;
  }

  const handleStatus = (id, token) => {
    let data = {
      enrollmentStatus: "Closed",
    };
    dispatcher(completeCourseStatus(id, data, token));
  };

  return (
    <>
      <div className={styles.detail}>
        <div className={styles.detailHeadding}>
          <h3>{detail.name}</h3>
          <div>
            <button
              className={
                detail.enrollmentStatus === "Closed"
                  ? styles.red
                  : styles.yellow
              }
              disabled={detail.enrollmentStatus === "Closed"}
              onClick={() => handleStatus(id, token)}
            >
              {detail.enrollmentStatus}
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
