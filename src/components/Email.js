import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Side from "./Side";
import { email } from "../config";
import Icon from "./icons/Icon";

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default function Email({ isHome }) {
  return (
    <Side isHome={isHome} orientation={"right"}>
      <StyledLinkWrapper>
        <a href={`mailto:${email}`}>
          <Icon name={"Email"} />
        </a>
      </StyledLinkWrapper>
    </Side>
  );
}
