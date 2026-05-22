const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();


// ROUTES
const authRoutes =
require("./routes/authRoutes");

const jobRoutes =
require("./routes/jobRoutes");

const resumeRoutes =
require("./routes/resumeRoutes");


// APP
const app = express();


// ================= MIDDLEWARE =================
app.use(cors());

app.use(express.json());


// STATIC UPLOADS FOLDER
app.use(

  "/uploads",

  express.static("uploads")
);


// ================= DATABASE =================
mongoose.connect(

  process.env.MONGO_URI

).then(() => {

  console.log("MongoDB Connected");

}).catch((error) => {

  console.log(error);
});


// ================= ROUTES =================

// AUTH ROUTES
app.use(

  "/api/auth",

  authRoutes
);


// JOB ROUTES
app.use(

  "/api/jobs",

  jobRoutes
);


// RESUME ROUTES
app.use(

  "/api/resume",

  resumeRoutes
);


// TEST ROUTE
app.get("/", (req, res) => {

  res.send("Server running");
});


// ================= SERVER =================
const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(

    `Server running on port ${PORT}`
  );
});