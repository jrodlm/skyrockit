const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  notes: String, 
  postingLink: String, 
  status: {
    type: String,
    enum: ['interested', 'applied', 'interviewing', 'rejected', 'accepted'],
    required: true,
  },
})

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  applications: [applicationSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// as a user, I should go to website and see landing page with sign up or sign in buttons
// as a user, I wshould be able to create a job application to track its status
// as a user, I expect... X Y Z