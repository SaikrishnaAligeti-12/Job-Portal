const express = require("express");

const router = express.Router();

const jwt = require("jsonwebtoken");

const User = require("../models/User");


// ================= REGISTER =================
router.post("/register", async (req, res) => {

  try {

    const {
      name,
      email,
      password,
      role,
    } = req.body;


    // CREATE USER
    const user = new User({

      name,

      email,

      password,
    });


    // SET ROLE
    user.role = role;


    // SAVE USER
    await user.save();


    // RESPONSE
    res.json({

      message: "User registered successfully",

      user,
    });

  } catch (error) {

    console.log(error);

    res.status(400).json({

      error: error.message,
    });
  }
});


// ================= LOGIN =================
router.post("/login", async (req, res) => {

  try {

    const {
      email,
      password,
    } = req.body;


    // FIND USER
    const user = await User.findOne({

      email,

      password,
    });


    // INVALID USER
    if (!user) {

      return res.status(400).json({

        error: "Invalid credentials",
      });
    }


    // GENERATE TOKEN
    const token = jwt.sign(

      {
        id: user._id,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      }
    );


    // RESPONSE
    res.json({

      message: "Login successful",

      token,

      user,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      error: error.message,
    });
  }
});


// ================= GET ALL USERS =================
router.get("/users", async (req, res) => {

  try {

    const users = await User.find();

    res.json(users);

  } catch (error) {

    console.log(error);

    res.status(500).json({

      error: error.message,
    });
  }
});


module.exports = router;