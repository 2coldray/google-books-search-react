import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [bookSearch, setBookSearch] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = event.target;
    setBookSearch({
      [name]: value,
    });
  };

  return (
    <form>
      <div class="form-group">
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
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  );
};

export default Search;
