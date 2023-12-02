import React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
