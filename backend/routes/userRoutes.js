const express = require('express');
const { getAllUsers } = require('../controllers/userController');
const router = express.Router();

// Fetch all users (alumni)
router.get('/users', getAllUsers);

module.exports = router;
