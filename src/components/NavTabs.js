import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './nav.css'

const navStyle = {
  backgroundColor: 'rgb(17, 1, 121)',
  fontColor: 'white',
  fontFamily: 'Georgia'
}
function NavTabs() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{fontFamily: 'Georgia', backgroundColor: "#3E83C1"}}>
        <Link className="navbar-brand" to='/'>Home</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    <div>
    <ul className="nav nav-tabs" style={navStyle}>
      <li className="nav-item">
        <NavLink
          to="Home"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Projects Gallery
        </NavLink>
       </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
    </div>
</nav>
  );
}

export default NavTabs;
