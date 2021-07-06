const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  Title: { type: String, required: true },
  img:
  {
      data: Buffer,
      contentType: String
  },
  description: { type: String, required: true },
 
});

const Blog = mongoose.model('blog', BlogSchema);

module.exports = Blog;