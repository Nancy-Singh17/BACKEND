const User = require("../models/User");

// VIEW PROFILE
exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");

  if (!user) return res.status(404).json({ message: "Not found" });

  res.json(user);
};

// UPDATE PROFILE
exports.updateProfile = async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) return res.status(404).json({ message: "Not found" });

  if (req.body.name) user.name = req.body.name;
  if (req.body.email) user.email = req.body.email;

  await user.save();

  res.json({
    id: user._id,
    name: user.name,
    email: user.email
  });
};