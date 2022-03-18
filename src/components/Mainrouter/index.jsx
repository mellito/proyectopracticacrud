import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../page/Home";
import Navbar from "../Navbar";
import { HOME_ROUTE, CREATE_ROUTE } from "../../components/Constans/Routes";
import CreatePerson from "../../page/CreatePerson";
const Mainrouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={CREATE_ROUTE} element={<CreatePerson />} />
        <Route path="invoices" element={""} />
      </Routes>
    </BrowserRouter>
  );
};

export default Mainrouter;
