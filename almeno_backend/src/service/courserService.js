const CouserDetails = require("../model/courseModel");

const createCourse = async (course) => {
  try {
    let courseData = await CouserDetails.create(course);
    return courseData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCourse = async (page = 0, pageSize) => {
  try {
    let courseData = await CouserDetails.find({})
      .populate("student")
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    return courseData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCourseById = async (courseId) => {
  try {
    let courseData = await CouserDetails.findById(courseId).populate("student");
    return courseData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const enroleInCourse = async (id, studentId) => {
  try {
    let courseData = await CouserDetails.find({
      student: studentId,
      _id: id,
    });

    if (courseData.length === 0) {
      let data = await CouserDetails.findByIdAndUpdate(
        id,
        {
          $addToSet: { student: studentId },
          enrollmentStatus: "In Progress"
        },
        { new: true }
      ).populate("student");
      return data;
    } else {
      return {
        message: "Course is Already Enolled ",
      };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getStudentEnrolledCourse = async (studentId) => {
  try {
    let courseData = await CouserDetails.find({
      student: studentId,
    }).select({
      name: 1,
      instructor: 1,
      duration: 1,
      updatedAt: 1,
      enrollmentStatus: 1,
    });

    return courseData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getEnroledCourseDetail = async (id, studentId) => {
  try {
    let courseData = await CouserDetails.find({
      student: studentId,
      _id: id,
    });
    return courseData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateEnroledCourseDetail = async (id, data) => {
  try {
    let courseData = await CouserDetails.findByIdAndUpdate(id, data, {
      new: true,
    }).populate("student");
    return courseData;
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
