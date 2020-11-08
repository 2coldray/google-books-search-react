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

  return (
    <div className="container text-center">
      <li>
        <h2>{props.title}</h2>
        <h2>{props.authors}</h2>
        <h2>{props.description}</h2>
        <img src={props.image} alt="image" />
        <h2>{props.link}</h2>
      </li>
    </div>
  );
};

export default BookSearch;
