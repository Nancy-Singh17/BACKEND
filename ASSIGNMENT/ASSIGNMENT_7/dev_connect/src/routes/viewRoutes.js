const express = require("express");
const axios = require("axios");

const router = express.Router();


// LOGIN PAGE
router.get("/login", (req, res) => {
  res.render("pages/login");
});

// REGISTER PAGE
router.get("/register", (req, res) => {
  res.render("pages/register");
});

// DASHBOARD
router.get("/dashboard", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:5000/api/posts");

    res.render("pages/dashboard", {
      posts: response.data
    });
  } catch (err) {
    res.send("Error loading dashboard");
  }
});

// CREATE PAGE
router.get("/create", (req, res) => {
  res.render("pages/createPost");
});


module.exports = router;