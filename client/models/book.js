const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  authors: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  title: {
    type: String,
    trim: true,
    required: true
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;