import React from "react";

function Gallery(props) {
  return (
    <div className="projects">
      <img alt={props.screenshot} className='img-fluid' src={props.screenshot}/>
      <h5>Repository: {props.repository}</h5>
      <h5>Deployment: {props.deployment} </h5>
      
    </div>
  )
};

export default Gallery;
