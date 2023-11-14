const jwt = require("jsonwebtoken");
require("dotenv").config();
const screatKey = process.env.SECRET;

const validateUser = (req, res, next) => {
  try {
    let { authorization } = req.headers;
    if (authorization) {
      let { id } = jwt.verify(authorization, screatKey);
      req.params.studentId = id ? id : "";
      next();
    }
  } catch (err) {
    throw err;
  }
};

module.exports = {
  validateUser,
};
