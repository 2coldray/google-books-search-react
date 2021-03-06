import React, { useState } from "react";
import axios from "axios";
import BookSearch from "../../components/BookSearch/BookSearch";

// const Search = () => {
//   const [bookSearch, setBookSearch] = useState("");
//   const [bookResults, setBookResults] = useState([]);

//   const handleInputChange = (e) => {
//     const { value } = e.target;
//     setBookSearch(value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .get(`https://www.googleapis.com/books/v1/volumes?q=${bookSearch}`)
//       .then((res) => {
//         console.log(res);
//         setBookResults(res.data.items);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="container">
//       <form>
//         <div className="form-group">
//           <label htmlFor="exampleFormControlInput1">Book</label>
//           <input
//             className="form-control"
//             id="exampleFormControlInput1"
//             placeholder="Search"
//             name="bookSearch"
//             value={bookSearch}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button
//           type="submit"
//           className="btn btn-primary"
//           onClick={handleFormSubmit}
//         >
//           Submit
//         </button>
//       </form>
//       <h2 className="text-center">Books</h2>
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-12">
//             <ul className="list-group">
//               {bookResults === undefined || bookResults.length === 0
//                 ? "No books with that title, Please search another a book above"
//                 : bookResults.map((res) => (
//                     <BookSearch
//                       key={res.selfLink}
//                       title={res.volumeInfo.title}
//                       authors={res.volumeInfo.authors}
//                       description={res.volumeInfo.description}
//                       link={res.volumeInfo.infoLink}
//                       image={
//                         res.volumeInfo.imageLinks === undefined
//                           ? ""
//                           : res.volumeInfo.imageLinks.thumbnail
//                       }
//                     />
//                   ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const Search = () => {
  const [state, setState] = useState({
    searchTerm: "",
    books: [],
    hasSearched: false,
  });

  const handleInputChange = (e) =>
    setState({ ...state, searchTerm: e.target.value });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!state.searchTerm) return;
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${state.searchTerm}`)
      .then((res) => {
        if (!res.data.items) throw "No Items Found!";
        setState({
          ...state,
          hasSearched: true,
          books: res.data.items.map((b) => ({
            title: b.volumeInfo.title,
            authors: b.volumeInfo.authors,
            description: b.volumeInfo.description,
            link: b.volumeInfo.infoLink,
            image: b.volumeInfo.imageLinks
              ? b.volumeInfo.imageLinks.thumbnail
              : "",
          })),
        });
      })
      .catch((err) => {
        console.log(err);
        setState({ ...state, hasSearched: true, books: [] });
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
            value={state.searchTerm}
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
              {!state.books.length && state.hasSearched
                ? "No books with that title, Please search another a book above"
                : state.books.map((b, i) => (
                    <BookSearch key={i + "-book"} book={b} />
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
