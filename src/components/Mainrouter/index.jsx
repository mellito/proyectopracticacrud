import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../page/Home";
import Navbar from "../Navbar";
const Mainrouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="expenses" element={""} />
        <Route path="invoices" element={""} />
      </Routes>
    </BrowserRouter>
  );
};

export default Mainrouter;
