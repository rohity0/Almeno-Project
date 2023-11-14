const express = require("express");
require("dotenv").config();
require("./config/database");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 9000;
const routes = require("./Routes/routes");
app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => console.log("Server is running port " + PORT));
