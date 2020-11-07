const express = require("express");
const router = express.Router();
const db = require("../models/Books");

//TODO: Get route
router.get("/api/books", (req, res) => {
  db.Books.find({})
    .then((foundBooks) => {
      res.json(foundBooks);
    })
    .catch((err) => {
      console.log(err),
        res.json({
          error: true,
          data: null,
          message: "Failed to retrieve books",
        });
    });
});

//TODO: Post route
router.post("/api/books", (req, res) => {
  db.Books.create(req.body)
    .then((saveBooks) => {
      res.json(saveBooks);
    })
    .catch((err) => {
      console.log(err),
        res.json({
          error: true,
          data: null,
          message: "Failed to save books",
        });
    });
});

//TODO: Delete route
router.delete("/api/books/:id", (req, res) => {
  db.Books.findByIdAndDelete(req.params.id)
    .then((deleteBook) => {
      res.json(deleteBook);
    })
    .catch((err) => {
      console.log(err),
        res.json({
          error: true,
          data: null,
          message: "Failed to delete books",
        });
    });
});


module.exports = router;