const studentService = require("../service/studentService");

const createStudent = (req, res) => {
  try {
    let data = req.body;
    let result = studentService.createStudent(data);
    res.json(result);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getStudent = async (req, res) => {
  try {
    let page = req.query.page;
    let pageSize = req.query.pageSize;
    let result = await studentService.getStudent(page, pageSize);
    res.json(result);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let result = await studentService.login(email, password);
    res.json(result);
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
