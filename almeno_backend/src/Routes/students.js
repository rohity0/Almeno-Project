const express = require("express");
const studentRoute = express.Router();
const studentController = require("../controllers/studentController");

studentRoute.post("/", studentController.createStudent);

studentRoute.get("/", studentController.getStudent);

studentRoute.post("/login", studentController.login);

module.exports = studentRoute;
