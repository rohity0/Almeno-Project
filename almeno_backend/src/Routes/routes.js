const express = require("express");
const courseRoute = require("./courses");
const studentRoute = require("./students");
const routes = express();

routes.use("/course", courseRoute);
routes.use("/student", studentRoute);

module.exports = routes;
