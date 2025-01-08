const User = require('../models/userModel');

// Fetch all alumni data
const getAllUsers = async (req, res) => {
  try {
    const alumni = await User.find(); // Fetch all alumni from the database
    res.status(200).json(alumni); // Respond with alumni data as JSON
  } catch (err) {
    res.status(500).json({ error: 'Error fetching alumni data' });
  }
};

module.exports = { getAllUsers };
