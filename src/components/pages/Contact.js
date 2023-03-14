// import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Learn from '../Learn';
import React, { Component } from "react";
import Wrapper from '../Wrapper';
import './contact.css';
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";


class Contact extends Component {
  render() {
  return (
    <Wrapper>
      {/* <Container>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container> */}
    <div className='contacts'>
      <h1>Contact Page</h1>
      <p>Email: <br></br>
      <a href='mailto: fpsingcak@gmail.com' class="btn btn-primary">fpsingcak@gmail.com</a>
      </p> 
      <p>
      GitHub: <br></br>
      <a href='https://github.com/FlorSing' class="btn btn-primary">https://github.com/FlorSing</a> 
      </p>
      <p>
      LinkedIn: <br></br>
      <a href='https://www.linkedin.com/in/florante-singcak/' class="btn btn-primary">https://www.linkedin.com/in/florante-singcak/</a> 
      </p>
      <p>See my CV: <br></br>
      <a href="../../assets/2023WebDevCVfps.pdf" class="btn btn-primary">FPScv2023</a>
      </p>
      {/* <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Routes>
        <Route path="learn" element={<Learn />} />
      </Routes> */}
    </div>

    </Wrapper>
    );
  }

}
{/* function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
      Email: {fpsingcak@gmail.com} 

      GitHub: {https://github.com/FlorSing} 

      LinkedIn: {https://www.linkedin.com/in/florante-singcak/} 
 
      </p>
      <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Routes>
        <Route path="learn" element={<Learn />} />
      </Routes>
    </div>
  );
} */}

export default Contact;
