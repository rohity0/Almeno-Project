const courseService = require("../service/courserService");

const createCourse = async (req, res) => {
  try {
    let data = req.body;
    let result = await courseService.createCourse(data);
    res.json(result);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCourse = async (req, res) => {
  try {
    let page = req.query.page;
    let pageSize = req.query.pageSize;
    let result = await courseService.getCourse(page, pageSize);
    res.json(result);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCourseById = async (req, res) => {
  try {
    let id = req.params.id;

    let result = await courseService.getCourseById(id);
    res.json(result);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const enroleInCourse = async (req, res) => {
  try {
    let { studentId, courseId } = req.params;
    console.log(studentId, courseId);
    console.log(":jediehie");
    let result = await courseService.enroleInCourse(courseId, studentId);
    res.json(result);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getStudentEnrolledCourse = async (req, res) => {
  try {
    let { studentId } = req.params;
    let result = await courseService.getStudentEnrolledCourse(studentId);
    res.json(result);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getEnroledCourseDetail = async (req, res) => {
  try {
    let { studentId, courseId } = req.params;
    let result = await courseService.getEnroledCourseDetail(
      courseId,
      studentId
    );
    res.json(result);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateEnroledCourseDetail = async (req, res) => {
  try {
    let { courseId } = req.params;
    let data = req.body;
    let result = await courseService.updateEnroledCourseDetail(courseId, data);
    res.json(result);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createCourse,
  getCourse,
  enroleInCourse,
  getStudentEnrolledCourse,
  getEnroledCourseDetail,
  getCourseById,
  updateEnroledCourseDetail,
};
