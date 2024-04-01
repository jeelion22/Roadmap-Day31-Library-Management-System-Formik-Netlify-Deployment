import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import Addbook from "./components/Addbook";
import Authors from "./components/Authors";

import { BooksProvider } from "./components/BookContext";
import Editbook from "./components/Editbook";
import Home from "./components/Home";
import Editauthor from "./components/Editauthor";

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
