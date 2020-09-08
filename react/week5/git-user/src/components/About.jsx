import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>About Github User Searcher</h1>
          <p>
            This is a single page application which can be used to search for
            github users and get basic information about their github profile.
            Technologies used: ReactJS, Bootstrap, Node and Github public API.
          </p>
        </Container>
      </Jumbotron>
    </>
  );
};
export default About;
