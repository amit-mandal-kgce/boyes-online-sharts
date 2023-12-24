import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
    unique: true
  },
  token: {
    type: String
  },
})

const User = mongoose.models.users || mongoose.model('users', userSchema)

export default User;
