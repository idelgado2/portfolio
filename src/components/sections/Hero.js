import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--white);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    color: var(--off-gold);
  }

  h3 {
    margin-top: 5px;
    color: var(--dark-blue);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames="fadeup" timeout={2000}>
            <div style={{ transitionDelay: `100ms` }}>
              <h1>Hi, my name is</h1>
              <h2 className="big-heading">Isaac Delgado.</h2>
              <h3 className="big-heading">I love music, film, and tech.</h3>
              <p>
                I work with software and build web applications. I learned to
                program to solve world problems.
              </p>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledHeroSection>
  );
}
