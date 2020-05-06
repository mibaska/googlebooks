import axios from "axios";

export default {
  getBooks: function() {
    return axios.get("/api/books");
  },
  postBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
