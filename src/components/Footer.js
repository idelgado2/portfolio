import React from "react";

export default function Footer() {
  return (
    <div className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>SimplyRecipes</span>. Built with{" "}
        <a href="https://www.gatsbyjs.com/">Gatsby</a>
      </p>
    </div>
  );
}
