import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledCredit tabindex="-1">
        <div>
          &copy;{new Date().getFullYear()} <span>WorkOfIsaac</span>, Built with{" "}
          <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
            Gatsby
          </a>
          <span> </span>&amp; Inspired by Brittany Chiang's Portfolio
        </div>
      </StyledCredit>
    </StyledFooter>
  );
}
