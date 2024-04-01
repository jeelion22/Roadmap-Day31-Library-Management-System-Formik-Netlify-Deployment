import React from "react";
import BooksContext from "./BookContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Card({ book }) {
  const { editValues, setEditValues } = useContext(BooksContext);
  const navigate = useNavigate();

  const handleBookEdit = (bookInfo) => {
    setEditValues(bookInfo);
    navigate("/books/edit");
  };

  const handleDelete = async (bookInfo) => {
    try {
      const del = await axios.delete(
        `https://6606ab44be53febb857e657e.mockapi.io/books/${bookInfo.id}`
      );

      setTimeout(() => {
        console.log(del.status);
        alert("The Book was Deleted successfully");
      }, 200);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card text-center mt-5 shadow-sm" style={{ width: "18rem" }}>
      <img
        src={book.img}
        className="img-fluid img-thumbnail rounded-start"
        alt="img"
      />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.author}</p>
        <p className="card-text">ISBN-{book.isbn}</p>
        <p className="card-text">
          <small className="text-body-secondary">
            Published On: {book.publicationDate}
          </small>
        </p>
        <div className="d-flex justify-content-center gap-2 flex-wrap">
          <button
            onClick={() => {
              handleBookEdit(book);
            }}
            className="btn btn-primary"
            type="button"
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleDelete(book);
            }}
            className="btn btn-danger"
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
