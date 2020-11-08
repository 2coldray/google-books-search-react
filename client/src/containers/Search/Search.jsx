import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [bookSearch, setBookSearch] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setBookSearch(value);
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Search;
