import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [bookSearch, setBookSearch] = useState("");
  const [bookResults, setBookResults] = useState([]);

//   useEffect()

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

              </div>
          </div>
      </div>
    </div>
  );
};

export default Search;
