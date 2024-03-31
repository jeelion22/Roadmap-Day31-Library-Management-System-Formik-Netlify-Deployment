import { Link } from "react-router-dom";

import "./styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <i className="fa-solid  fa-book-open-reader fa-2x "></i>
          <span className="ms-2 text-white">E-Library Managment</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <Link to={"/books"} className="nav-link text-white">
              Books
            </Link>

            <Link to={"/addbook"} className="nav-link text-white">
              AddBook
            </Link>

            <Link to={"/authors"} className="nav-link text-white">
              Authors
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
