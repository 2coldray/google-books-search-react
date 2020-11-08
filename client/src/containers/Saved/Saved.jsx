import React, { useState, useEffect } from "react";
import axios from "axios";
import SavedSearch from "../../components/SavedSearch/SavedSearch";

const Saved = () => {

  const [getBooks, setGetBooks] = useState([]);

  useEffect(() => {
    loadAllBooks();
  }, []);

  const loadAllBooks = () => {
    axios.get("/api/books").then((response) => {
      setGetBooks(response.data);
    });
  };

  return (
    <div className="container">
      <ul className="list-group">
        {getBooks.map((book) => (
          <SavedSearch 
          title={book.title}
          authors={book.authors}
          description={book.description}
          image={book.image}
          id={book._id}
          loadAllBooks={loadAllBooks}
          />
        ))}
      </ul>
    </div>
  )
};

export default Saved;
