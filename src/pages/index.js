import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../components/Layout";

export default function Home({ location }) {
  return (
    <Layout location={location}>
      <h1>home page</h1>
    </Layout>
  );
}
