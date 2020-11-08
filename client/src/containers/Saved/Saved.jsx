import React, { useState, useEffect } from "react";
import axios from "axios";

const Saved = () => {
  const [bookResults, setBookResults] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    axios.get("/api/books").then((res) => {
      setBookResults(res.data);
    });
  };

  const viewBook = () => {
    let path = book.link;
    window.open(path);
  };

  const deleteBook = () => {};

  return (
    <div className="container text-center">
      <ul className="list-group">
        {bookResults.map((book) => {
          <li className="list-group-item">
            <h2>{book.title}</h2>
            <h3>By: {book.authors}</h3>
            <p>{book.description}</p>
            <img src={book.image} />
            <button
              type="submit"
              className="btn btn-danger mr-2"
              onClick={saveBook}
            >
              Delete Book
            </button>
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={viewBook}
            >
              View Book
            </button>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Saved;
