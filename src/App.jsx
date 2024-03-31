import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Books from "./Books";
import Addbook from "./Addbook";
import Authors from "./Authors";

import { BooksProvider } from "./BookContext";
import Editbook from "./Editbook";
import Home from "./Home";
import Editauthor from "./Editauthor";

function App() {
  return (
    <BooksProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />

          <Route path="books/edit" element={<Editbook />}></Route>
          <Route path="/addbook" element={<Addbook />}></Route>
          <Route path="/authors" element={<Authors />} />
          <Route path="/authors/edit" element={<Editauthor />} />
        </Routes>
      </BrowserRouter>
    </BooksProvider>
  );
}

export default App;
