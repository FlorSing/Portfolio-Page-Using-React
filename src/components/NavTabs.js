import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'

const navStyle = {
  backgroundColor: 'rgb(17, 1, 121)',
  fontColor: 'white',
  fontFamily: 'Georgia'
}
function NavTabs() {
  return (
    <div>
    <ul className="nav nav-tabs" style={navStyle}>
      <li className="nav-item">
        <NavLink
          to="/"
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
  );
}

export default NavTabs;
