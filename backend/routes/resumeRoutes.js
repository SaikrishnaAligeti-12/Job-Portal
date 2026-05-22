const express = require("express");

const router = express.Router();

const multer = require("multer");


// ================= STORAGE =================
const storage = multer.diskStorage({

  destination: function (
    req,
    file,
    cb
  ) {

    cb(null, "uploads/");
  },

  filename: function (
    req,
    file,
    cb
  ) {

    cb(

      null,

      Date.now() +
      "-" +
      file.originalname
    );
  },
});


// ================= MULTER =================
const upload = multer({

  storage: storage,
});


// ================= UPLOAD ROUTE =================
router.post(

  "/upload",

  upload.single("resume"),

  (req, res) => {


    // DEBUGGING
    console.log("BODY:");

    console.log(req.body);


    console.log("FILE:");

    console.log(req.file);


    // IF FILE MISSING
    if (!req.file) {

      return res.status(400).json({

        error: "No file uploaded",
      });
    }


    // SUCCESS
    res.json({

      success: true,

      message:
        "Resume uploaded successfully",

      file: req.file,
    });
  }
);

module.exports = router;