import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const HttpCall = new Schema({
  url: { type: String },
  httpType: { type: String, enum: ['get', 'post', 'put', 'patch', 'delete', 'copy', 'head', 'options', 'link', 'unlink', 'purge', 'lock', 'unlock', 'propfind', 'view'], default: 'get'},
  // content: {},
  // header: {},
  // response: {}
})
