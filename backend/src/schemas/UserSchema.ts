import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pfp: {
    type: String,
    required: false,
  },
});
const User = mongoose.model("User", UserSchema);

export default User;
