const mongoose =require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  age: Number,
  emailId: String,
  password: String,
  city: String,
  dob: Date
});

const User = mongoose.model('User', userSchema);

module.exports = User