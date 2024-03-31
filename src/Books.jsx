import { useContext } from "react";
import BooksContext from "./BookContext";
import Card from "./Card";
import "./styles/Books.css";

function Books() {
  const { books } = useContext(BooksContext);

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center p-2 m-2 ">Books Available</h2>
        {books.map((book) => {
          return (
            <div key={book.id} className="col-3 card-group ">
              <Card book={book} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Books;
