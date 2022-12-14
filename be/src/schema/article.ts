import { Schema, model } from "mongoose";
const articleSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: true
  },
  abstract: {
    type: String,
    required:true
  },
  content: {
    type: String,
    required: true
  },
  lastModified: {
    type: Number,
    required: true
  }
}, { _id: false })
const Article = model('article', articleSchema)
export default Article 