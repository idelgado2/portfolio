import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default function Home({ location }) {
  return (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />
      </StyledMainContainer>
    </Layout>
  );
}
