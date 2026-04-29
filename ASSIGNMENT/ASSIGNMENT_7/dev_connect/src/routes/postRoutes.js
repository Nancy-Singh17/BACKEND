const express = require("express");
const router = express.Router();

const auth = require("../middlewares/authMiddleware");

const {
  createPost,
  getPosts,
  getSinglePost,
  updatePost,
  deletePost
} = require("../controllers/postController");

// CREATE
router.post("/", auth, createPost);

// READ
router.get("/", getPosts);
router.get("/:id", getSinglePost);

// UPDATE
router.put("/:id", auth, updatePost);

// DELETE
router.delete("/:id", auth, deletePost);

module.exports = router;