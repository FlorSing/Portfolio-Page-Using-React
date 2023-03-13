import { render } from "@testing-library/react";
import React, { Component } from "react";
import projects from "../../projects.json"
import Gallery from "../Gallery";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";
import Wrapper from "../Wrapper";

// const bakgrdStyle = {
//   backgroundColor: 'navy'
// }

class Projects extends Component {

  state = {
    projects
  }


render() {
  return (
    <Wrapper>
    <Container >
      <Row>
          {this.state.projects.map(project => (
            <Gallery
              id = {project.id}
              key = {project.id}
              title = {project.title}
              repository = {project.repository}
              screenshot = {project.screenshot}
              deployment = {project.deployment}>
            </Gallery>
          ))}            
      </Row>
    </Container>
    </Wrapper>
    );
}
}

export default Projects;
