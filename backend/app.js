const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express(); // Initialize the Express app

// Middleware to parse JSON bodies
app.use(express.json());

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:3000', // Adjust this to match your frontend's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));

// Define routes
app.use('/api', authRoutes);

app.options('*', cors()); // Handle preflight requests for all routes


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error('Error connecting to MongoDB Atlas:', error));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
