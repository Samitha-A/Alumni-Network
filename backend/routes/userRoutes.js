const express = require('express');
const { getAllUsers,loginUser } = require('../controllers/userController');
const router = express.Router();

// Fetch all users (alumni)
router.get('/Users', getAllUsers);
router.post("/login", loginUser); 

module.exports = router;
