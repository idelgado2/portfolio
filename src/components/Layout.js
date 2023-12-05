import React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import "../assets/css/main.css";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
