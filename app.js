const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const { taskRoutes } = require("./routes/taskRoutes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const M_URI = process.env.M_URI;
app.use(bodyParser.json());
app.use(cors());
app.use("/api", taskRoutes);

mongoose.connect(M_URI);
mongoose.connection.on("error", (error) => {
  console.error(error);
});
mongoose.connection.once("open", () => {
  console.log("Database connected");
});

app.listen(PORT, () => {
  console.log("Server is running");
});
