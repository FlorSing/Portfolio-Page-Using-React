import React from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";


function Gallery(props) {
  return (
        <Col size='sm-4'>
          <Card heading = {props.title}>
            <img alt={props.screenshot} className='img-fluid' src={props.screenshot}/>
            <h6>Repository: {props.repository}</h6>
            <h6>Deployment: {props.deployment} </h6>
          </Card>
        </Col>


    // <div className="projects">
    //   <img alt={props.screenshot} className='img-fluid' src={props.screenshot}/>
    //   <h5>Repository: {props.repository}</h5>
    //   <h5>Deployment: {props.deployment} </h5>
      
    // </div>
  )
};

export default Gallery;
