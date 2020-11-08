import React, { useState } from "react";
import axios from "axios";
import BookSearch from "../../components/BookSearch/BookSearch";

const Search = () => {
  const [bookSearch, setBookSearch] = useState("");
  const [bookResults, setBookResults] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setBookSearch(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${bookSearch}`)
      .then((res) => {
        console.log(res);
        setBookResults(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Book</label>
          <input
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Search"
            name="bookSearch"
            value={bookSearch}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
      <h2 className="text-center">Books</h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <ul className="list-group">
              {bookResults === undefined || bookResults.length === 0
                ? "No books with that title, Please search another a book above"
                : bookResults.map((res) => (
                    <BookSearch
                      key={res.selfLink}
                      title={res.volumeInfo.title}
                      authors={res.volumeInfo.authors}
                      description={res.volumeInfo.description}
                      link={res.volumeInfo.infoLink}
                      image={
                        res.volumeInfo.imageLinks === undefined
                          ? ""
                          : res.volumeInfo.imageLinks.thumbnail
                      }
                    />
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
