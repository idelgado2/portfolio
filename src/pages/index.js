import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default function Home({ location }) {
  return (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <Hero />
      </StyledMainContainer>
    </Layout>
  );
}
