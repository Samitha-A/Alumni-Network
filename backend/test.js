const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust the path as needed

const uri = 'mongodb+srv://samitha:password0910@cluster1.ymsm6.mongodb.net/'; // Use your connection string

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to MongoDB Atlas');

        // Fetch all users
        const allUsers = await User.find({});
        console.log('All Users:', allUsers);

        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
