import * as React from "react";
import Layout from "../components/Layout";
import { ExampleButton } from "../examples/button";
import styled from "styled-components";

export default function Home() {
  return (
    <Layout>
      <ExampleButton>Click Me</ExampleButton>
      <Wrapper>
        <h1>Home Page</h1>
        <p className="text">
          Minim officia ipsum veniam sit fugiat consequat pariatur eiusmod
          laboris. Commodo occaecat velit mollit est mollit ad. Enim id
          exercitation sint deserunt anim deserunt ipsum duis nulla labore
          consequat elit minim. Eiusmod aute adipisicing aliquip laboris.
          Laborum nisi eiusmod consectetur aliqua commodo. Magna officia veniam
          non est reprehenderit tempor. Officia reprehenderit dolore dolor enim
          cillum pariatur aliquip officia nulla sunt.
        </p>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.section`
  color: red;

  h1 {
    color: green;
  }

  .text {
    text-transform: capitalize;
  }
`;
