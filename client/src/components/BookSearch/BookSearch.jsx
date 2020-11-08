import React, { useState } from "react";
import axios from "axios";

const BookSearch = (props) => {
  const [book, setBook] = useState({
    title: props.title,
    authors: props.authors,
    description: props.description,
    image: props.image,
    link: props.link,
  });

  const saveBook = () => {
      axios.post("/api/books", book).then((res) => {
          console.log(res);
      })
  };

  const viewBook = () => {

  }

  return (
    <div className="container text-center">
      <li className="list-group-item">
        <h2>{props.title}</h2>
        <h3>By: {props.authors}</h3>
        <p>{props.description}</p>
        <img src={props.image} />
        <p>Buy Here: {props.link}</p>
        <button type="submit" className="btn btn-success mr-2" onClick={saveBook}>Save Book</button>
        <button type="submit" className="btn btn-secondary" onClick={viewBook}>View Book</button>
      </li>
    </div>
  );
};

export default BookSearch;
