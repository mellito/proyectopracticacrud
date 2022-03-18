import React from "react";
import { NavLink } from "react-router-dom";
import { HOME_ROUTE, CREATE_ROUTE } from "../../components/Constans/Routes";
const Navbar = () => {
  return (
    <nav>
      <NavLink to={HOME_ROUTE}>Home</NavLink>
      <NavLink to={CREATE_ROUTE}>Create</NavLink>
    </nav>
  );
};

export default Navbar;
