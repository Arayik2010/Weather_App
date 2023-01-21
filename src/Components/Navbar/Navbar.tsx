import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbarLink" to="/">
        Home
      </Link>
      <Link className="navbarLink" to="dashboard">
        Weather
      </Link>
    </div>
  );
};
