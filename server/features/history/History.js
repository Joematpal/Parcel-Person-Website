import mongoose from 'mongoose';
import { Schema } from 'mongoose';
//import HttpCall from './HttpCall/HttpCall'

const History = new Schema({
  user: { type: Schema.Types.ObjectId, required:true, ref:'User' },
  httpCalls: { type: Schema.Types.ObjectId, required: true, ref: 'HttpCall' }
})
