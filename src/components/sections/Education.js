import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import sr from "../../utils/sr";
import { srConfig } from "../../config";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 15px;
  position: relative;
  margin-top: 50px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: auto;
  }

  .project-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 35px;

    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: "";
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);
    margin-top: 20px;

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    min-height: 430px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const query = graphql`
  query {
    education: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/education/" } }
      sort: { frontmatter: { graduationDate: DESC } }
    ) {
      nodes {
        frontmatter {
          cover {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                placeholder: BLURRED
                width: 200
                formats: AUTO
              )
            }
          }
          url
          location
          graduationDate
          degree
          title
        }
      }
    }
  }
`;

export default function Education() {
  const data = useStaticQuery(query);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100))
    );
  }, []);

  return (
    <section id="education">
      <h2 className="numbered-heading" ref={revealTitle}>
        Where I Learned Some Stuff
      </h2>
      <StyledProjectsGrid>
        {data &&
          data.education.nodes.map((node, i) => {
            const { frontmatter } = node;
            const { cover, url, location, graduationDate, degree, title } =
              frontmatter;
            const image = getImage(cover);
            return (
              <StyledProject
                key={i}
                ref={(el) => (revealProjects.current[i] = el)}
              >
                <a href={url} className="project-image">
                  <div>
                    <GatsbyImage image={image} alt={title} className="img" />
                  </div>
                </a>

                <div className="project-content">
                  <div className="project-description">
                    <h3 className="project-title">{degree}</h3>
                    <h3>{location}</h3>
                    <h4>{graduationDate}</h4>
                  </div>
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
    </section>
  );
}
