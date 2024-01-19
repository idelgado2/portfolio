import React from "react";
import Layout from "../components/Layout";

export default function Error({ location }) {
  return (
    <Layout location={location}>
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </Layout>
  );
}
