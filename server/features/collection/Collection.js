import mongoose from 'mongoose';
import { Schema } from 'mongoose';
// import HttpCall from './HttpCall/HttpCall'

const Collection = new Schema({
  user: { type: Schema.Types.ObjectId, required:true, ref:'User' },
  // httpCalls:[HttpCall],
  httpCalls: { type: Schema.Types.ObjectId, required: true, ref:'HttpCall'}
  name: { type: String, required: true},
  owner: { type: String, required: true},
  group: [{ type: String, required: true, ref: "User"}]
})
