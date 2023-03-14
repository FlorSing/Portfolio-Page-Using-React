import React from "react";
import About from "./About";

function Header(props) {
  return <div className={`header${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;

  return (
    <Header>
    <div class="jumbotron"      >
      {props.children}
    </div>
    </Header>
  )
};

export default Header;
