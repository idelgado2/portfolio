import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Eu deserunt ipsum consectetur eu nulla.</h2>
            <p>
              Adipisicing id voluptate amet cupidatat adipisicing dolore eiusmod
              sit non nostrud duis nulla et. Reprehenderit laboris consectetur
              incididunt amet cupidatat sint velit consectetur nisi pariatur non
              veniam veniam.
            </p>
            <p>Consectetur officia aliqua aute ut ea sunt dolore.</p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="person pouring salt in bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  );
};

export default About;
