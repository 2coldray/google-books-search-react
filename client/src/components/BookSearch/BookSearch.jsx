import React from "react";
import axios from "axios";

const BookSearch = ({ book }) => {
  const saveBook = () => {
    axios.post("/api/books", book).then((res) => {
      console.log(res);
    });
  };

  const viewBook = () => {
    let path = book.link;
    window.open(path);
  };

  return (
    <div className="container text-center">
      <li className="list-group-item">
        <h2>{book.title}</h2>
        <h3>By: {book.authors}</h3>
        <p>{book.description}</p>
        <img src={book.image} />
        <button
          type="submit"
          className="btn btn-success mr-2"
          onClick={saveBook}
        >
          Save Book
        </button>
        <button type="submit" className="btn btn-secondary" onClick={viewBook}>
          View Book
        </button>
      </li>
    </div>
  );
};

export default BookSearch;
