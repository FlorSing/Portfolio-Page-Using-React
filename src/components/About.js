// import React, { Component } from "react";
import Header from './Header';
import './about.css';
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

const photo = require('../assets/FpsIDbw.jpg');

function About() {
  
    return (
      <Wrapper>
      <Header>
      <div class="jumbotron"      >
        <h1 id='name'>Florante P. Singcak</h1>
        <h3>Front-end Web Developer</h3>
        <p>
        Highly competent with a vast wealth of transferrable professional skills gained from previous roles ready to bring on board and add value to the organisation. 
        </p>
        <p>
        Currently upgrading skills to keep up with relevant technologies and seek the right opportunity to 
  dedicate a full-time career for a well-established company
        </p>
      </div>
      </Header>
      <Container>
        <Row>
          <Card class="IDcard" size = 'sm-4'>
          <div class="IDcard" size>
            {/* <img src={photo} class="card-img-top" alt="photoID"></img> */}
   
      </div>

          </Card>
        </Row>
      </Container>

      <Footer>
      <footer>
         <span>
           Copyright: FPS 2023
         </span>
       </footer>
       </Footer>
      </Wrapper>


    );
}

export default About;



