const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
   firstname: {
      type: String,
      required: true
   },

   lastname: {
      type: String,
      required: true
   },

   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   confirmpassword: {
      type: String,
      required: true
   },
   gender: {
      type: String,
      required: true
   }
}, { timestamps: true });

// we need to create a collection

const Signup = new mongoose.model("Signup", signupSchema);

module.exports = Signup;