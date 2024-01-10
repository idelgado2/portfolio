import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Jobs from "../components/sections/Jobs";
import Projects from "../components/sections/Projects";
import Education from "../components/sections/Education";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default function Home({ location }) {
  return (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />
        <Jobs />
        <Education />
        <Projects />
      </StyledMainContainer>
    </Layout>
  );
}
