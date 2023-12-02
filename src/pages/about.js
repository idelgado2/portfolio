import React from "react";
import Layout from "../components/Layout";
import { page, text } from "../examples/about.module.css";

const about = () => {
  return (
    <Layout>
      <div className={page}>
        <h1>About Page</h1>
        <p>
          Minim officia ipsum veniam sit fugiat consequat pariatur eiusmod
          laboris. Commodo occaecat velit mollit est mollit ad. Enim id
          exercitation sint deserunt anim deserunt ipsum duis nulla labore
          consequat elit minim. Eiusmod aute adipisicing aliquip laboris.
          Laborum nisi eiusmod consectetur aliqua commodo. Magna officia veniam
          non est reprehenderit tempor. Officia reprehenderit dolore dolor enim
          cillum pariatur aliquip officia nulla sunt.
        </p>
      </div>
    </Layout>
  );
};

export default about;
