import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../assets/images/logo.svg";
import { FaAlignJustify } from "react-icons/fa";

export default function Navbar() {
  const [show, setShow] = useState(false);
  function toggleNavBar(value) {
    console.log("I'm clicked!");
    if (value) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  return (
    // okay now this is verified
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" onClick={() => setShow(false)}>
            <img src={logo} alt="logo image" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FaAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            recipes
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setShow(false)}>
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
