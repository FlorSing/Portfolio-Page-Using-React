
import React, { Component } from "react";
import Wrapper from '../Wrapper';
import './contact.css';



class Contact extends Component {
  render() {
  return (
    <Wrapper>
 
    <div className='contacts'>
      <div>
      <h1>Contact Page</h1>
      </div>
      <div>
        <p>Email: <br></br>
      <a href='mailto: fpsingcak@gmail.com' class="btn btn-primary">fpsingcak@gmail.com</a>
      </p> 
      </div>
      <div>
        <p>
      GitHub: <br></br>
      <a href='https://github.com/FlorSing' class="btn btn-primary">https://github.com/FlorSing</a> 
      </p>
      </div> 
      <div><p>
      LinkedIn: <br></br>
      <a href='https://www.linkedin.com/in/florante-singcak/' class="btn btn-primary">https://www.linkedin.com/in/florante-singcak/</a> 
      </p>
      </div>
      <div><p>See my CV: <br></br>
      {/* <a href="../../assets/2023WebDevCVfps.pdf" class="btn btn-primary">FPScv2023</a> */}
      <a href='https://github.com/FlorSing/portfolio-page-using-react/blob/main/src/assets/FPS-cv-2023i.pdf' class="btn btn-primary">FPS-CV</a>
      </p>
      </div>
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

export default Contact;
