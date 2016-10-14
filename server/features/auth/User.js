import mongoose from 'mongoose'
import { Schema } from 'mongoose'
// var findOrCreate = require('mongoose-findorcreate')
import findOrCreate from 'mongoose-findorcreate';
// var ClickSchema = new Schema({ ... });
// ClickSchema.plugin(findOrCreate);
// var Click = mongoose.model('Click', ClickSchema);


const User = new Schema({
  googleId: {type: String, required: true, unique:true },
  displayName: { type: String, required: true },
  name: [],
  gender: { type: String }
});

User.plugin(findOrCreate);

export default mongoose.model("User", User)
