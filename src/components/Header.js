import React from "react";

function Header(props) {
  return <div className={`header${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Header;
