const { Students } = require("../model/studentModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const screatKey = process.env.SECRET;
const createStudent = async (studnetProfile) => {
  try {
    let studentData = await Students.create(studnetProfile);
    return studentData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getStudent = async (page = 0, pageSize) => {
  try {
    let studentData = await Students.find({})
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    return studentData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const login = async (email, password) => {
  try {
    let user = await Students.findOne({ email: email });
    let token;
    if (user) {
      token = jwt.sign({ email: user.email, id: user._id }, screatKey, {
        expiresIn: "24 hrs",
      });
      return {
        token: token,
      };
    } else {
      return {
        message: "User Doesn't Exist",
      };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createStudent,
  getStudent,
  login,
};
