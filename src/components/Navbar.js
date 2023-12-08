import React from "react";
import { Link } from "gatsby";
import logo from "../assets/images/logo.svg";
import { FaAlignJustify } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button className="nav-btn">
            <FaAlignJustify />
          </button>
        </div>
        <div className="nav-links show-links"></div>
      </div>
    </nav>
  );
}
