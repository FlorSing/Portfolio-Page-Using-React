import React from "react";

function Gallery(props) {
  return (
    <div>
      <h1>Gallery</h1>
  
      <ul className="list-group">
        {props.projects.map(item => (
          <li className="list-group-item" key={item.id}>
            {/* {item.screenshot} */}
            <img alt={item.screenshot} className="img-fluid" src={item.screenshot} />
          </li>
        ))}
      </ul>
  
    </div>
  );
}

export default Gallery;
