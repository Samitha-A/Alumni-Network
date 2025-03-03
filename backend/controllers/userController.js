const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ✅ Fetch all users
const getAllUsers = async (req, res) => {
  try {
    const alumni = await User.find(); // Fetch all users
    res.status(200).json(alumni);
  } catch (err) {
    res.status(500).json({ error: "Error fetching alumni data" });
  }
};

// ✅ Login function
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Compare entered password with hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "default_secret_key",  // ✅ Add default value
      { expiresIn: "1h" }
    );
    
    res.json({ token, user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getAllUsers, loginUser };
