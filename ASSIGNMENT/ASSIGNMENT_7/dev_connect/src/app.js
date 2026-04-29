const express = require("express");
const axios = require("axios");

const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", "./src/views");

//TEST ROUTE
app.get("/", (req, res) => {
  res.send("dev_connect server running");
});

//API ROUTES
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

//FRONTEND ROUTES
const viewRoutes = require("./routes/viewRoutes");
app.use("/", viewRoutes);


// REGISTER
app.post("/register", async (req, res) => {
  try {
    await axios.post("http://localhost:5000/api/auth/register", req.body);
    res.redirect("/login");
  } catch (err) {
    res.send("Register failed");
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      req.body
    );

    global.token = response.data.token;
    res.redirect("/dashboard");
  } catch (err) {
    res.send("Login failed");
  }
});

//CREATE POST
app.post("/create", async (req, res) => {
  try {
    await axios.post(
      "http://localhost:5000/api/posts",
      req.body,
      {
        headers: {
          Authorization: global.token
        }
      }
    );

    res.redirect("/dashboard");
  } catch (err) {
    res.send("Create post failed");
  }
});

module.exports = app;