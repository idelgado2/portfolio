import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import sr from "../../utils/sr";
import { srConfig } from "../../config";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  display: flex;
  flex-wrap: wrap;

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li``;

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
                layout: CONSTRAINED
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
                <h3 className="education-title"></h3>

                <div className="project-image">
                  <a href={url}>
                    <GatsbyImage image={image} alt={title} className="img" />
                  </a>
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
    </section>
  );
}
