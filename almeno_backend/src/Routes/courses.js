const express = require("express");
const courseRoute = express.Router();
const courseController = require("../controllers/courseCountroller");
const { validateUser } = require("../middleware/authMiddleware");

//create List
courseRoute.post("/list", courseController.createCourse);

// get course-list
courseRoute.get("/list", courseController.getCourse);
courseRoute.get("/list/:id", courseController.getCourseById);

//course-enrolling
courseRoute.put(
  "/course-enrole/:courseId/student",
  validateUser,
  courseController.enroleInCourse
);
//student-enrolled-course // student Id
courseRoute.get(
  "/student-enrolled-course",
  validateUser,
  courseController.getStudentEnrolledCourse
);

//enrolled course detail
courseRoute.get(
  "/course/:courseId/student",
  validateUser,
  courseController.getEnroledCourseDetail
);

courseRoute.put(
  "/course-status/:courseId",
  validateUser,
  courseController.updateEnroledCourseDetail
);

module.exports = courseRoute;
