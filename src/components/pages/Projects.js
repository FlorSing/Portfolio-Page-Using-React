import { render } from "@testing-library/react";
import React, { Component } from "react";
import projects from "../../projects.json"
import Gallery from "../Gallery";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";

class Projects extends Component {

  state = {
    projects
  }


render() {
  return (
    <Container>
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
  );
}
}

export default Projects;

{/* <Card
heading = {this.state.projects.tile}>
  {this.state.projects.map(project => (
    <Gallery
    //   id = {project.id}
    //   key = {project.id}
    //   title = {project.title}
    //   repository = {project.repository}
    //   screenshot = {project.screenshot}
    //   deployment = {project.deployment}
    />
    ))}  
</Card> */}
