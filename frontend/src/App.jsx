import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateBooks } from "./pages/CreateBooks.jsx";
import { ShowBooks } from "./pages/ShowBooks.jsx";
import { EditBooks } from "./pages/EditBooks.jsx";
import { DeleteBooks } from "./pages/DeleteBooks.jsx";
import { Home } from "./pages/Home.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<ShowBooks />} />
      <Route path="/books/edit/:id" element={<EditBooks />} />
      <Route path="/books/delete/:id" element={<DeleteBooks />} />
    </Routes>
  );
};

export default App;
