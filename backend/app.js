const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

const User = require('./models/userModel');

// In your backend API route (for example, using Express)
app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find();  // Assuming you're using Mongoose to fetch data
      console.log(users);  // Log to check if any users are being fetched from the database
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Error fetching users' });
    }
  });
  

// MongoDB Connection
const MONGO_URI = 'mongodb+srv://samitha:password0910@cluster1.ymsm6.mongodb.net/Users';
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
