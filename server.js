const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const Book = require("./client/models/book");
const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/books", function(req, res) {
  Book.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});
app.post("/api/books", ({ body }, res) => {
  const book = new Book(body);

  Book.create(book)
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});
app.delete("/api/books/:id", (req, res) => {
  Book.remove(
    {
      _id: mongojs.ObjectID(req.params.id)
    },
    (error, removed) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(removed);
        res.send(removed);
      }
    }
  );
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
