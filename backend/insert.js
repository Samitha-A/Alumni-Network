const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Adjust the path if needed

const uri = 'mongodb+srv://samitha:password0910@cluster1.ymsm6.mongodb.net/'; // Use your connection string

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to MongoDB Atlas');

        // Hash the password before storing
        const hashedPassword = await bcrypt.hash('password123', 10);

        // Create a sample user
        const sampleUser = new User({
            username: 'athul',
            password: '$2b$12$1dlrGIFb4rH.BFfahEAvueKaOHLFXgKxEz.n4Gz5gIa/PGDu77rMe',
        });

        // Save the user to the database
        await sampleUser.save();
        console.log('Sample user added successfully');

        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error:', err);
    });
