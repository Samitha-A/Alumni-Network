const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
  student_id : String,
  username : String,
  password : String,
  last_name : String,
  phone_no : String,
  batch : String,
  department : String,
  gitHub : String,
  linkedin : String,
  mail : String,
  location : String,
  work_experience : [
    {
      company: String,
      job_title: String,
      years_of_experience: String,
      description: String,
    },
  ],
});

const User = mongoose.model('users', userSchema);

module.exports = User;
