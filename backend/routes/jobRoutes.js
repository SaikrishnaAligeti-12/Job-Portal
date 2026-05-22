const express = require("express");

const router = express.Router();

const Job = require("../models/Job");

const Application = require("../models/Application");


// ================= CREATE JOB =================
router.post("/", async (req, res) => {

  try {

    const job = await Job.create(req.body);

    res.json(job);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
});


// ================= GET ALL JOBS =================
router.get("/", async (req, res) => {

  try {

    const jobs = await Job.find();

    res.json(jobs);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
});


// ================= APPLY JOB =================
router.post("/apply/:jobId", async (req, res) => {

  try {

    // get job id from URL
    const { jobId } = req.params;

    // get user id from frontend
    const { userId } = req.body;

    // create application
    const application =
      await Application.create({

        user: userId,

        job: jobId,
      });

    res.json({
      message: "Applied successfully",
      application,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
});


module.exports = router;