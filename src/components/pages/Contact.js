// import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Learn from '../Learn';
import React, { Component } from "react";
import Wrapper from '../Wrapper';
import './contact.css';



class Contact extends Component {
  render() {
  return (
    <Wrapper>
    <div className='contacts'>
      <h1>Contact Page</h1>
      <p>
      Email: fpsingcak@gmail.com 

      GitHub: https://github.com/FlorSing 

      LinkedIn: https://www.linkedin.com/in/florante-singcak/ 
 
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
