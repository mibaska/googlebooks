const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
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
    type: Image,
    required: true
  },
  link: {
    type: URL,
    required: true
  },
  title: {
    type: String,
    trim: true,
    required: true
  }
});

const Example = mongoose.model("Example", ExampleSchema);

module.exports = Book;