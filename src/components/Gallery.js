import React from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import './gallery.css';
import Wrapper from './Wrapper';



function Gallery(props) {
  return (
    
        <Col className='projCol' size='sm-4'>
          <Card className='cardTitle' heading = {props.title}>
            <img alt={props.screenshot} className='img-fluid' src={props.screenshot}/>
            <p>Repository: {props.repository}</p>
            <p>Deployment: {props.deployment} </p>
          </Card>
        </Col>

    
  )
};

export default Gallery;
