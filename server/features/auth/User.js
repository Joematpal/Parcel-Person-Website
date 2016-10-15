import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const User = new Schema({
  googleId: {type: String, required: true, unique:true },
  displayName: { type: String, required: true },
  name: [],
  gender: { type: String }
});

export default mongoose.model("User", User)
