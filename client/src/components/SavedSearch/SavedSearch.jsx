import React from "react";
import axios from "axios";

const SavedSearch = ({ book, loadAllBooks }) => {
  const viewBook = () => {
    let path = book.link;
    console.log(path);
    window.open(path);
  };

  const deleteBook = (id) => {
    axios.delete(`/api/books/${id}`).then((res) => {
      console.log(res);
      loadAllBooks();
    });
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
          className="btn btn-danger mr-2"
          onClick={() => deleteBook(book._id)}
        >
          Delete Book
        </button>
        <button type="submit" className="btn btn-secondary" onClick={viewBook}>
          View Book
        </button>
      </li>
    </div>
  );
};

export default SavedSearch;
