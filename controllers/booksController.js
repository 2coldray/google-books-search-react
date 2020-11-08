const express = require("express");
const router = express.Router();
const Books = require("../models/Books");

//TODO: Get route
router.get("/api/books", (req, res) => {
  Books.find({})
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
  Books.create({
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link,
  })
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
  Books.findByIdAndDelete(req.params.id).then((deleteBook) => {
    res.json(deleteBook);
  });
});

module.exports = router;
