import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle.js";
import theme from "../styles/theme.js";
import Navbar from "../components/Navbar.js";
import Head from "./Head.js";
import Social from "./Social.js";
import Email from "./Email.js";
//import "normalize.css";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default function Layout({ children, location }) {
  const isHome = location.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    // Sets target="_blank" rel="noopener noreferrer" on external links
    const handleExternalLinks = () => {
      const allLinks = Array.from(document.querySelectorAll("a"));
      if (allLinks.length > 0) {
        allLinks.forEach((link) => {
          if (link.host !== window.location.host) {
            link.setAttribute("rel", "noopener noreferrer");
            link.setAttribute("target", "_blank");
          }
        });
      }
    };

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);

  return (
    <>
      <Head />
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {/* <a className="skip-to-content" href="#content">
            Skip to Content
          </a> */}
          {/* not sure if i need the a tag above here */}
          <StyledContent>
            <Navbar isHome={isHome} />
            <Social isHome={isHome} />
            <Email isHome={isHome} />
          </StyledContent>
        </ThemeProvider>
      </div>
    </>
  );
}
