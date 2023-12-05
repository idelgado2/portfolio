import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/tags">tags</Link>
          </li>
          <li>
            <Link to="/recipes">recipes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
