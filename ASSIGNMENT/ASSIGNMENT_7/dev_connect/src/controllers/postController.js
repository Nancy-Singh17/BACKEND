const Post = require("../models/Post");

//CREATE POST
exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      author: req.user.id
    });

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: "Error creating post" });
  }
};

//GET ALL POSTS
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts" });
  }
};

//GET SINGLE POST
exports.getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("author", "name");

    if (!post) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Error fetching post" });
  }
};

//UPDATE POST
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Not found" });
    }

    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    if (req.body.title) post.title = req.body.title;
    if (req.body.content) post.content = req.body.content;

    await post.save();

    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Error updating post" });
  }
};

//DELETE POST
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Not found" });
    }

    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await post.deleteOne();

    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting post" });
  }
};